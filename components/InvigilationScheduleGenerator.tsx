import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Exam, Invigilator, InvigilationAssignment } from '../types'

interface InvigilationScheduleGeneratorProps {
  exams: Exam[];
  invigilators: Invigilator[];
}

export function InvigilationScheduleGenerator({ exams, invigilators }: InvigilationScheduleGeneratorProps) {
  const [schedule, setSchedule] = useState<InvigilationAssignment[]>([]);

  const generateSchedule = () => {
    const newSchedule: InvigilationAssignment[] = [];
    exams.forEach((exam, index) => {
      const invigilatorIndex = index % invigilators.length;
      newSchedule.push({
        examId: exam.id,
        invigilatorId: invigilators[invigilatorIndex].id,
      });
    });
    setSchedule(newSchedule);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">Invigilation Schedule Generator</h2>
      <Button onClick={generateSchedule} className="bg-green-600 hover:bg-green-700 text-white">Generate Schedule</Button>
      <Table>
        <TableHeader>
          <TableRow className="bg-green-100 dark:bg-green-800">
            <TableHead className="text-green-800 dark:text-green-200">Exam</TableHead>
            <TableHead className="text-green-800 dark:text-green-200">Date</TableHead>
            <TableHead className="text-green-800 dark:text-green-200">Time</TableHead>
            <TableHead className="text-green-800 dark:text-green-200">Invigilator</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((assignment) => {
            const exam = exams.find(e => e.id === assignment.examId);
            const invigilator = invigilators.find(i => i.id === assignment.invigilatorId);
            return (
              <TableRow key={`${assignment.examId}-${assignment.invigilatorId}`} className="hover:bg-green-50 dark:hover:bg-green-900">
                <TableCell>{exam?.subject}</TableCell>
                <TableCell>{exam?.date}</TableCell>
                <TableCell>{`${exam?.startTime} - ${exam?.endTime}`}</TableCell>
                <TableCell>{invigilator?.name}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

