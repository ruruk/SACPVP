"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  User,
  CheckCircle,
  XCircle,
  AlertCircle,
  MapPin,
  Loader2,
} from "lucide-react";
import { fetchMembersFromCSV, MemberWithProvince } from "@/lib/csv-parser";
import styles from "./registered-members.module.css";

export default function RegisteredMembersClient() {
  const searchParams = useSearchParams();
  const initialSearchTerm = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [filteredMembers, setFilteredMembers] = useState<MemberWithProvince[]>(
    []
  );
  const [allMembers, setAllMembers] = useState<MemberWithProvince[]>([]);
  const [isSearching, setIsSearching] = useState(!!initialSearchTerm);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load CSV data on component mount
  useEffect(() => {
    const loadMembers = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const members = await fetchMembersFromCSV();
        setAllMembers(members);
      } catch (err) {
        setError("Failed to load member data. Please try again later.");
        console.error("Error loading members:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadMembers();
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredMembers([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = allMembers.filter(
      (member) =>
        member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.surname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(results);
  }, [searchTerm, allMembers]);

  const getStatusColor = (regtype: string) => {
    switch (regtype) {
      case "Prof Valuer":
        return styles.statusProfessional;
      case "Prof Associated Valuer":
        return styles.statusAssociated;
      case "Candidate Valuer":
      case "Candidate Valuers":
      case "Candidate Single Residential":
        return styles.statusCandidate;
      default:
        return "";
    }
  };

  return (
    <div className={styles.membersPage}>
      <div className="container">
        <div className={styles.searchSection}>
          <h1 className={styles.title}>Registered Persons</h1>
          <p className={styles.description}>
            Search for registered property valuers by name
          </p>

          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <Search className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Enter name to search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              {searchTerm && (
                <button
                  className={styles.clearButton}
                  onClick={() => setSearchTerm("")}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>

        <div className={styles.resultsSection}>
          {isLoading && (
            <div className={styles.loadingState}>
              <Loader2 size={48} className={styles.loadingIcon} />
              <h2>Loading member data...</h2>
              <p>Please wait while we load the member database</p>
            </div>
          )}

          {error && (
            <div className={styles.errorState}>
              <AlertCircle size={48} className={styles.errorIcon} />
              <h2>Error loading data</h2>
              <p>{error}</p>
            </div>
          )}

          {!isLoading && !error && isSearching && (
            <>
              {filteredMembers.length > 0 ? (
                <>
                  <h2 className={styles.resultsTitle}>
                    Search Results ({filteredMembers.length})
                  </h2>
                  <div className={styles.membersList}>
                    {filteredMembers.map((member, index) => (
                      <div
                        key={`${member.surname}-${member.firstName}-${member.province}-${index}`}
                        className={styles.memberCard}
                      >
                        <div className={styles.memberHeader}>
                          <div className={styles.avatarContainer}>
                            <User size={24} className={styles.avatarIcon} />
                          </div>
                          <div className={styles.memberInfo}>
                            <h3 className={styles.memberName}>
                              {member.firstName} {member.surname}
                            </h3>
                            <div
                              className={`${
                                styles.memberStatus
                              } ${getStatusColor(member.regType)}`}
                            >
                              <CheckCircle size={14} />
                              <span>{member.regType}</span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.memberDetails}>
                          <div className={styles.detailItem}>
                            <MapPin size={16} className={styles.detailIcon} />
                            <span className={styles.provinceInfo}>
                              <strong>Province:</strong> {member.province}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className={styles.noResults}>
                  <AlertCircle size={48} className={styles.noResultsIcon} />
                  <h2>No members found</h2>
                  <p>Try a different search term or check the spelling</p>
                </div>
              )}
            </>
          )}

          {!isLoading && !error && !isSearching && (
            <div className={styles.searchPrompt}>
              <Search size={48} className={styles.promptIcon} />
              <p>Enter a name to search for members</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
