import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Room } from '../types'

interface RoomManagementProps {
  onAddRoom: (room: Room) => void;
}

export function RoomManagement({ onAddRoom }: RoomManagementProps) {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [newRoom, setNewRoom] = useState<Room>({
    id: '',
    number: '',
    capacity: 0,
    features: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name === 'capacity' ? parseInt(e.target.value) : e.target.value;
    setNewRoom({ ...newRoom, [e.target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const room = { ...newRoom, id: Date.now().toString() };
    setRooms([...rooms, room]);
    onAddRoom(room);
    setNewRoom({
      id: '',
      number: '',
      capacity: 0,
      features: [],
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">Room Management</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-green-50 dark:bg-green-900 p-4 rounded-md">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="number" className="text-green-700 dark:text-green-300">Room Number</Label>
            <Input id="number" name="number" value={newRoom.number} onChange={handleInputChange} required className="border-green-300 dark:border-green-700" />
          </div>
          <div>
            <Label htmlFor="capacity" className="text-green-700 dark:text-green-300">Capacity</Label>
            <Input id="capacity" name="capacity" type="number" value={newRoom.capacity} onChange={handleInputChange} required className="border-green-300 dark:border-green-700" />
          </div>
        </div>
        <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Add Room</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow className="bg-green-100 dark:bg-green-800">
            <TableHead className="text-green-800 dark:text-green-200">Room Number</TableHead>
            <TableHead className="text-green-800 dark:text-green-200">Capacity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rooms.map((room) => (
            <TableRow key={room.id} className="hover:bg-green-50 dark:hover:bg-green-900">
              <TableCell>{room.number}</TableCell>
              <TableCell>{room.capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

