import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Invigilator } from '../types'

interface InvigilatorManagementProps {
  onAddInvigilator: (invigilator: Invigilator) => void;
}

export function InvigilatorManagement({ onAddInvigilator }: InvigilatorManagementProps) {
  const [invigilators, setInvigilators] = useState<Invigilator[]>([]);
  const [newInvigilator, setNewInvigilator] = useState<Invigilator>({
    id: '',
    invigilatorId:'',
    name: '',
    email: '',
    phone: '',
    availability: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewInvigilator({ ...newInvigilator, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const invigilator = { ...newInvigilator, id: Date.now().toString() };
    setInvigilators([...invigilators, invigilator]);
    onAddInvigilator(invigilator);
    setNewInvigilator({
      id: '',
      invigilatorId:'',
      name: '',
      email: '',
      phone: '',
      availability: [],
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">Invigilator Management</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-green-50 dark:bg-green-900 p-4 rounded-md">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-green-700 dark:text-green-300">Name</Label>
            <Input id="name" name="name" value={newInvigilator.name} onChange={handleInputChange} required className="border-green-300 dark:border-green-700" />
          </div>
          <div>
            <Label htmlFor="email" className="text-green-700 dark:text-green-300">Email</Label>
            <Input id="email" name="email" type="email" value={newInvigilator.email} onChange={handleInputChange} required className="border-green-300 dark:border-green-700" />
          </div>
          <div>
            <Label htmlFor="phone" className="text-green-700 dark:text-green-300">Phone</Label>
            <Input id="phone" name="phone" type="tel" value={newInvigilator.phone} onChange={handleInputChange} required className="border-green-300 dark:border-green-700" />
          </div>
        </div>
        <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Add Invigilator</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow className="bg-green-100 dark:bg-green-800">
            <TableHead className="text-green-800 dark:text-green-200">Name</TableHead>
            <TableHead className="text-green-800 dark:text-green-200">Email</TableHead>
            <TableHead className="text-green-800 dark:text-green-200">Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invigilators.map((invigilator) => (
            <TableRow key={invigilator.id} className="hover:bg-green-50 dark:hover:bg-green-900">
              <TableCell>{invigilator.name}</TableCell>
              <TableCell>{invigilator.email}</TableCell>
              <TableCell>{invigilator.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

