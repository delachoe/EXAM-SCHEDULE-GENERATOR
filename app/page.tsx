"use client"

import { useState } from 'react'
import { ExamTimetableManagement } from '../components/ExamTimetableManagement'
import { InvigilatorManagement } from '../components/InvigilatorManagement'
import { RoomManagement } from '../components/RoomManagement'
import { InvigilationScheduleGenerator } from '../components/InvigilationScheduleGenerator'
import { Exam, Invigilator, Room } from '../types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [invigilators, setInvigilators] = useState<Invigilator[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);

  const handleAddExam = (exam: Exam) => {
    setExams([...exams, exam]);
  };

  const handleAddInvigilator = (invigilator: Invigilator) => {
    setInvigilators([...invigilators, invigilator]);
  };

  const handleAddRoom = (room: Room) => {
    setRooms([...rooms, room]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-100">Exam Invigilation Schedule System</h1>
        <Tabs defaultValue="exams" className="bg-white dark:bg-green-950 rounded-lg shadow-lg p-6">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="exams">Exams</TabsTrigger>
            <TabsTrigger value="invigilators">Invigilators</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>
          <TabsContent value="exams">
            <ExamTimetableManagement rooms={rooms} onAddExam={handleAddExam} />
          </TabsContent>
          <TabsContent value="invigilators">
            <InvigilatorManagement onAddInvigilator={handleAddInvigilator} />
          </TabsContent>
          <TabsContent value="rooms">
            <RoomManagement onAddRoom={handleAddRoom} />
          </TabsContent>
          <TabsContent value="schedule">
            <InvigilationScheduleGenerator exams={exams} invigilators={invigilators} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}


