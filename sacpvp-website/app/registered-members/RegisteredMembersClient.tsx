"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, User, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import membersData from "@/data/members.json";
import styles from "./registered-members.module.css";

export default function RegisteredMembersClient() {
  const searchParams = useSearchParams();
  const initialSearchTerm = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [isSearching, setIsSearching] = useState(!!initialSearchTerm);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredMembers([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = membersData.filter(
      (member) =>
        member.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.surname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(results);
  }, [searchTerm]);

  const getStatusColor = (regtype) => {
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
          {isSearching && (
            <>
              {filteredMembers.length > 0 ? (
                <>
                  <h2 className={styles.resultsTitle}>
                    Search Results ({filteredMembers.length})
                  </h2>
                  <div className={styles.membersList}>
                    {filteredMembers.map((member) => (
                      <div key={member.id} className={styles.memberCard}>
                        <div className={styles.memberHeader}>
                          <div className={styles.avatarContainer}>
                            <User size={24} className={styles.avatarIcon} />
                          </div>
                          <div className={styles.memberInfo}>
                            <h3 className={styles.memberName}>
                              {member.firstname} {member.surname}
                            </h3>
                            <div
                              className={`${
                                styles.memberStatus
                              } ${getStatusColor(member.regtype)}`}
                            >
                              <CheckCircle size={14} />
                              <span>{member.regtype}</span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.memberDetails}>
                          <div className={styles.detailItem}>
                            {member.active === "Active" ? (
                              <>
                                <CheckCircle
                                  size={16}
                                  className={`${styles.detailIcon} ${styles.activeIcon}`}
                                />
                                <span className={styles.activeStatus}>
                                  <strong>Status:</strong> Active
                                </span>
                              </>
                            ) : (
                              <>
                                <XCircle
                                  size={16}
                                  className={`${styles.detailIcon} ${styles.inactiveIcon}`}
                                />
                                <span className={styles.inactiveStatus}>
                                  <strong>Status:</strong> Inactive
                                </span>
                              </>
                            )}
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

          {!isSearching && (
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
