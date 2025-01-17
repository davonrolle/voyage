'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

// This data would typically come from your backend/database
const restrictedBreeds = [
  { breed: "Pit Bull Terrier", details: "Including American Pit Bull Terrier, American Staffordshire Terrier, Staffordshire Bull Terrier" },
  { breed: "Rottweiler", details: "All varieties" },
  { breed: "German Shepherd", details: "Including Belgian Malinois and other shepherd varieties" },
  { breed: "Doberman Pinscher", details: "All varieties" },
  { breed: "Chow Chow", details: "All varieties" },
  { breed: "Presa Canario", details: "Also known as Canary Mastiff" },
  { breed: "Boerboel", details: "South African Mastiff" },
  { breed: "Wolf Hybrid", details: "Any dog with wolf ancestry" },
  { breed: "Fila Brasileiro", details: "Brazilian Mastiff" },
  { breed: "Tosa Inu", details: "Japanese Fighting Dog" },
]

export function RestrictedBreedsTable() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBreeds = restrictedBreeds.filter(breed =>
    breed.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
    breed.details.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search breeds..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm mx-auto"
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Breed</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBreeds.map((breed) => (
              <TableRow key={breed.breed}>
                <TableCell className="font-medium">{breed.breed}</TableCell>
                <TableCell>{breed.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {filteredBreeds.length === 0 && (
        <p className="text-center text-gray-500">No breeds found matching your search.</p>
      )}
    </div>
  )
}

