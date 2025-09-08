export interface MemberData {
  surname: string;
  firstName: string;
  province: string;
  regType: string;
}

export interface MemberWithProvince extends MemberData {
  province: string;
}

// Province mapping from filename to display name
export const PROVINCE_MAPPING: Record<string, string> = {
  "MembersEasternCape.csv": "Eastern Cape",
  "MembersFreeState.csv": "Free State",
  "MembersGauteng.csv": "Gauteng",
  "MembersLimpopo.csv": "Limpopo",
  "MembersMpumalanga.csv": "Mpumalanga",
  "MembersNatal.csv": "KwaZulu-Natal",
  "MembersNorthernCape.csv": "Northern Cape",
  "MembersNorthWest.csv": "North West",
  "MembersWesterProvince.csv": "Western Cape",
};

export function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

export function parseCSVContent(
  csvContent: string,
  province: string
): MemberWithProvince[] {
  const lines = csvContent.split("\n").filter((line) => line.trim());
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]);
  const members: MemberWithProvince[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length !== headers.length) continue;

    const regType = values[3] || "";

    // Filter out records where regtype is \N (null/empty)
    if (regType === "\\N" || regType === "" || regType === "null") {
      continue;
    }

    const member: MemberWithProvince = {
      surname: values[0] || "",
      firstName: values[1] || "",
      province: province,
      regType: regType,
    };

    members.push(member);
  }

  return members;
}

export async function fetchMembersFromCSV(): Promise<MemberWithProvince[]> {
  const allMembers: MemberWithProvince[] = [];

  const csvFiles = Object.keys(PROVINCE_MAPPING);

  try {
    const promises = csvFiles.map(async (filename) => {
      try {
        const response = await fetch(`/members/${filename}`);
        if (!response.ok) {
          console.warn(`Failed to fetch ${filename}:`, response.statusText);
          return [];
        }

        const csvContent = await response.text();
        const province = PROVINCE_MAPPING[filename];
        return parseCSVContent(csvContent, province);
      } catch (error) {
        console.warn(`Error fetching ${filename}:`, error);
        return [];
      }
    });

    const results = await Promise.all(promises);
    results.forEach((members) => allMembers.push(...members));

    return allMembers;
  } catch (error) {
    console.error("Error fetching members from CSV files:", error);
    return [];
  }
}
