"use client";

import React, { useState, useEffect } from "react";
import { mockData as transactionData } from "@/asset/data";

interface Transaction {
  id: number;
  date: string;
  amount: number;
  description: string;
}

const itemsPerPage = 7;

const TransactionTable: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);
  const [sortBy, setSortBy] = useState<keyof Transaction>("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setTransactions(transactionData);
    setFilteredTransactions(transactionData);
  }, []);

  useEffect(() => {
    const filtered = transactions.filter(
      (transaction) =>
        transaction.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.amount
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  }, [searchTerm, transactions]);

  const handleSort = (field: keyof Transaction) => {
    if (field === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }

    // Sorting logic
    const sortedTransactions = [...filteredTransactions].sort((a, b) => {
      const sortValueA = a[field];
      const sortValueB = b[field];
      if (sortOrder === "asc") {
        return sortValueA < sortValueB ? -1 : sortValueA > sortValueB ? 1 : 0;
      } else {
        return sortValueA > sortValueB ? -1 : sortValueA < sortValueB ? 1 : 0;
      }
    });
    setFilteredTransactions(sortedTransactions);
  };

  // Pagination logic
  const numberOfPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginationRange = 5;
  const halfPaginationRange = Math.floor(paginationRange / 2);
  let paginationStart =
    currentPage <= halfPaginationRange ? 1 : currentPage - halfPaginationRange;
  const paginationEnd =
    paginationStart + paginationRange - 1 <= numberOfPages
      ? paginationStart + paginationRange - 1
      : numberOfPages;
  if (paginationEnd - paginationStart < paginationRange - 1) {
    paginationStart =
      paginationEnd - paginationRange + 1 >= 1
        ? paginationEnd - paginationRange + 1
        : 1;
  }

  const indexOfLastTransaction = currentPage * itemsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto mt-8">
      <input
        type="text"
        placeholder="Search by description or amount..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-full"
      />
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("date")}
            >
              Date {sortBy === "date" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("amount")}
            >
              Amount {sortBy === "amount" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("description")}
            >
              Description{" "}
              {sortBy === "description" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border px-4 py-2">{transaction.date}</td>
              <td className="border px-4 py-2">{transaction.amount}</td>
              <td className="border px-4 py-2">{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="mt-4">
        {paginationStart > 1 && (
          <>
            <button
              onClick={() => paginate(1)}
              className="px-3 py-1 bg-gray-300 hover:bg-gray-400 mr-2 rounded"
            >
              1
            </button>
            {paginationStart > 2 && <span className="mx-1">...</span>}
          </>
        )}
        {Array.from(
          { length: paginationEnd - paginationStart + 1 },
          (_, index) => (
            <button
              key={paginationStart + index}
              onClick={() => paginate(paginationStart + index)}
              className={`px-3 py-1 bg-gray-300 hover:bg-gray-400 mr-2 rounded ${
                currentPage === paginationStart + index ? "bg-gray-400" : ""
              }`}
            >
              {paginationStart + index}
            </button>
          )
        )}
        {paginationEnd < numberOfPages && (
          <>
            {paginationEnd < numberOfPages - 1 && (
              <span className="mx-1">...</span>
            )}
            <button
              onClick={() => paginate(numberOfPages)}
              className="px-3 py-1 bg-gray-300 hover:bg-gray-400 mr-2 rounded"
            >
              {numberOfPages}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionTable;
