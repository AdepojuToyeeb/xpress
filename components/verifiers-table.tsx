"use client";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Verifier } from "@/types/verifier";
import { cn } from "@/lib/utils";
import { ElipsesIcon } from "./ui/icons/elipses";

interface VerifiersTableProps {
  verifiers: Verifier[];
}

export function VerifiersTable({ verifiers }: VerifiersTableProps) {
  return (
    <div className="space-y-6">
      <div className="md:flex space-y-3 md:space-y-0 items-center w-full justify-between gap-4">
        <Select defaultValue="all">
          <SelectTrigger className="bg-white border text-xs font-medium border-[#EEEEEE] md:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="text-xs font-medium" value="all">
              All
            </SelectItem>
            <SelectItem className="text-xs font-medium" value="active">
              Active Verifiers
            </SelectItem>
            <SelectItem
              className="text-xs font-medium"
              value="awaiting_approval"
            >
              Pending Verifiers
            </SelectItem>
            <SelectItem className="text-xs font-medium" value="deactivated">
              Deactivated Verifiers
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="space-y-3 md:space-y-0 md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2 top-3.5 h-4 w-4 text-secondary" />
            <Input
              placeholder="Name/Phone no / Location"
              className="pl-8 h-11 bg-white border placeholder:text-xs border-[#EEEEEE]"
            />
          </div>
          <Button
            className="font-normal w-full md:w-auto rounded-sm text-sm h-11"
            variant={"default"}
          >
            <Plus /> Add New Verifier
          </Button>
        </div>
      </div>

      <div className="rounded-md shadow-md">
        <div className="rounded-t-md max-h-[calc(100vh-240px)] no-scrollbar overflow-y-scroll bg-white/90">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Partner</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {verifiers.map((verifier) => (
                <TableRow key={verifier.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{verifier.firstName}</TableCell>
                  <TableCell>{verifier.lastName}</TableCell>
                  <TableCell>{verifier.phoneNumber}</TableCell>
                  <TableCell>{verifier.partner}</TableCell>
                  <TableCell>{verifier.location}</TableCell>
                  <TableCell>
                    <div
                      className={cn(
                        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium",
                        verifier.status === "active" &&
                          "bg-success/10 text-success",
                        verifier.status === "awaiting_approval" &&
                          "bg-pending/10 text-pending",
                        verifier.status === "deactivated" &&
                          "bg-danger/10 text-danger"
                      )}
                    >
                      {verifier.status === "active" && "Active"}
                      {verifier.status === "awaiting_approval" &&
                        "Awaiting approval"}
                      {verifier.status === "deactivated" && "Deactivated"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <ElipsesIcon className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="md:flex rounded-b-md bg-white shadow-custom items-center p-4 py-2 justify-between">
          <div className="flex items-center space-x-2">
            <p className="text-sm text-[#808080]">Rows per page</p>
            <Select defaultValue="10">
              <SelectTrigger className="w-20 h-9">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" disabled>
              Previous
            </Button>
            <Button variant="ghost" size="sm" className="text-primary">
              1
            </Button>
            <Button variant="ghost" size="sm" className="">
              2
            </Button>
            <Button variant="ghost" className="text-primary" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
