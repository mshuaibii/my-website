"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Sep 2022 — Present",
    currentPosition: "Research Engineer",
    place: "Fundamental AI Research (FAIR), Meta",
    previousPositions: [],
    description: "",
    skills: [],
  },
  {
    timeline: "Summer 2020,2021",
    currentPosition: "Research Intern, Artifical Intelligence",
    place: "Fundamental AI Research (FAIR), Meta",
    previousPositions: [],
    description: "",
    skills: [],
  },
  {
    timeline: "Aug 2018 - July 2022",
    currentPosition: "Graduate Student",
    place: "Carnegie Mellon University",
    previousPositions: [],
    description: "",
    skills: [],
  },
  {
    timeline: "Jan 2017 - Aug 2018",
    currentPosition: "Environmental Engineer",
    place: "U.S. Environmental Protection Agency",
    previousPositions: [],
    description: "",
    skills: [],
  },

];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
    <div className="text-2xl font-medium mb-2">Experience</div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-xs text-primary whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex p-0">
              <p className="text-foreground font-semibold">
                {job.currentPosition} • {job.place}
              </p>
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
    </section>
  );
}
