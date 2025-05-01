"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import membersData from "@/data/members.json";
import styles from "./member-search-widget.module.css";

export default function MemberSearchWidget() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredMembers([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = membersData
      .filter(
        (member) =>
          member.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          member.surname.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5); // Limit to 5 results for compact display

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just trigger the search locally
    if (searchTerm.trim() !== "") {
      setIsSearching(true);
    }
  };

  return (
    <div className={styles.widgetContainer}>
      <div className={styles.widgetContent}>
        <h2 className={styles.widgetTitle}>Find a Registered Member</h2>
        <p className={styles.widgetDescription}>
          Search for property valuers by name
        </p>

        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="text"
              placeholder="Enter name to search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            {searchTerm && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={() => setSearchTerm("")}
              >
                ×
              </button>
            )}
          </div>
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>

        {isSearching && filteredMembers.length > 0 && (
          <div className={styles.resultsContainer}>
            <div className={styles.resultsList}>
              {filteredMembers.map((member) => (
                <div key={member.id} className={styles.resultCard}>
                  <div className={styles.resultHeader}>
                    <User size={16} className={styles.resultIcon} />
                    <div className={styles.resultName}>
                      {member.firstname} {member.surname}
                    </div>
                  </div>
                  <div className={styles.resultDetails}>
                    <div
                      className={`${styles.resultType} ${getStatusColor(
                        member.regtype
                      )}`}
                    >
                      {member.regtype}
                    </div>
                    <div
                      className={
                        member.active === "Active"
                          ? styles.activeStatus
                          : styles.inactiveStatus
                      }
                    >
                      {member.active === "Active" ? (
                        <CheckCircle size={12} />
                      ) : (
                        <XCircle size={12} />
                      )}
                      <span>{member.active}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredMembers.length === 5 && (
              <Link
                href={`/registered-members?search=${encodeURIComponent(
                  searchTerm
                )}`}
                className={styles.viewMoreLink}
              >
                <span>View more results</span>
                <ArrowRight size={14} />
              </Link>
            )}
          </div>
        )}

        {isSearching && filteredMembers.length === 0 && (
          <div className={styles.noResults}>
            No members found. Try a different search term.
          </div>
        )}

        <div className={styles.widgetFooter}>
          <Link href="/registered-members" className={styles.viewAllLink}>
            View all registered members
          </Link>
        </div>
      </div>
    </div>
  );
}
