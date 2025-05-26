"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const selPublications = [
  {
    imagePath: "/UMA.png",
    title: "UMA: A Family of Universal Models for Atoms",
    description: "Brandon M Wood*, Misko Dzamba*, Xiang Fu*, Meng Gao*, Muhammed Shuaibi*, Luis Barroso Luque, Kareem Abdelmaqsoud, Vahe Gharakhanyan, John R Kitchin, Daniel S Levine, Kyle Michel, Anuroop Sriram, Taco Cohen, Abhishek Das, Ammar Rizvi, Sushree Jagriti Sahoo, Zachary W Ulissi, C Lawrence Zitnick",
    skills: [
	    { name: "Models", url: "https://huggingface.co/facebook/UMA" }
    ],
    link: "https://ai.meta.com/research/publications/uma-a-family-of-universal-models-for-atoms/",
  },
  {
    imagePath: "/OMol25.png",
    title: "The Open Molecules 2025 (OMol25) Dataset, Evaluations, and Models",
    description: "Daniel S. Levine*, Muhammed Shuaibi*, Evan Walter Clark Spotte-Smith, Michael G. Taylor, Muhammad R. Hasyim, Kyle Michel, Ilyes Batatia, Gábor Csányi, Misko Dzamba, Peter Eastman, Nathan C. Frey, Xiang Fu, Vahe Gharakhanyan, Aditi S. Krishnapriyan, Joshua A. Rackers, Sanjeev Raja, Ammar Rizvi, Andrew S. Rosen, Zachary Ulissi, Santiago Vargas, C. Lawrence Zitnick, Samuel M. Blau, Brandon M. Wood",
    skills: [
	    { name: "Dataset", url: "https://huggingface.co/facebook/OMol25" },
    ],
    link: "https://arxiv.org/abs/2505.08762",
  },
];

export default function Publications() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
    <div className="text-2xl font-medium mb-4">Publications</div>
      <>
        {selPublications.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground text-xs">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <a
                      key={index}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge>{skill.name}</Badge>
                    </a>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
