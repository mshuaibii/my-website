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
    imagePath: "/UMA_min.png",
    title: "UMA: A Family of Universal Models for Atoms",
    authors: "Brandon M Wood*, Misko Dzamba*, Xiang Fu*, Meng Gao*, Muhammed Shuaibi*, Luis Barroso Luque, Kareem Abdelmaqsoud, Vahe Gharakhanyan, John R Kitchin, Daniel S Levine, Kyle Michel, Anuroop Sriram, Taco Cohen, Abhishek Das, Ammar Rizvi, Sushree Jagriti Sahoo, Zachary W Ulissi, C Lawrence Zitnick",
    skills: [
    ],
    link: "https://ai.meta.com/research/publications/uma-a-family-of-universal-models-for-atoms/",
    journal: "Preprint 2025",
  },
  {
    imagePath: "/OMol25.png",
    title: "The Open Molecules 2025 (OMol25) Dataset, Evaluations, and Models",
    authors: "Daniel S. Levine*, Muhammed Shuaibi*, Evan Walter Clark Spotte-Smith, Michael G. Taylor, Muhammad R. Hasyim, Kyle Michel, Ilyes Batatia, Gábor Csányi, Misko Dzamba, Peter Eastman, Nathan C. Frey, Xiang Fu, Vahe Gharakhanyan, Aditi S. Krishnapriyan, Joshua A. Rackers, Sanjeev Raja, Ammar Rizvi, Andrew S. Rosen, Zachary Ulissi, Santiago Vargas, C. Lawrence Zitnick, Samuel M. Blau, Brandon M. Wood",
    skills: [
    ],
    link: "https://arxiv.org/abs/2505.08762",
    journal: "Preprint 2025",
  },
  {
    imagePath: "/NEB_TS.png",
    title: "CatTSunami: Accelerating Transition State Energy Calculations with Pretrained Graph Neural Networks",
    authors: "Brook Wander, Muhammed Shuaibi, John R. Kitchin, Zachary W. Ulissi, C. Lawrence Zitnick",
    skills: [
    ],
    link: "https://pubs.acs.org/doi/10.1021/acscatal.4c04272",
    journal: "ACS Catalysis 2025"
  },
  {
    imagePath: "/dens_min.png",
    title: "Generalizing Denoising to Non-Equilibrium Structures Improves Equivariant Force Fields",
    authors: "Yi-Lun Liao, Tess Smidt, Muhammed Shuaibi*, Abhishek Das*",
    skills: [
    ],
    link: "https://arxiv.org/abs/2403.09549",
    journal: "TMLR 2024"
  },
  {
    imagePath: "/OMat24.png",
    title: "Open Materials 2024 (OMat24) Inorganic Materials Dataset and Models",
    authors: "Luis Barroso-Luque, Muhammed Shuaibi, Xiang Fu, Brandon M. Wood, Misko Dzamba, Meng Gao, Ammar Rizvi, C. Lawrence Zitnick, Zachary W. Ulissi",
    skills: [
    ],
    link: "https://arxiv.org/abs/2410.12771",
    journal: "Preprint 2024",
  },
  {
    imagePath: "/ocx24_min.png",
    title: "Open Catalyst Experiments 2024 (OCx24): Bridging Experiments and Computational Models)",
    authors: "Jehad Abed*, Jiheon Kim*, Muhammed Shuaibi*, Brook Wander*, Boris Duijf, Suhas Mahesh, Hyeonseok Lee, Vahe Gharakhanyan, Sjoerd Hoogland, Erdem Irtem, Janice Lan, Niels Schouten, Anagha Usha Vijayakumar, Jason Hattrick-Simpers, John R. Kitchin, Zachary W. Ulissi, Aaike van Vugt, Edward H. Sargent, David Sinton, C. Lawrence Zitnick",
    skills: [
    ],
    link: "https://arxiv.org/abs/2411.11783",
    journal: "Preprint 2024",
  },
  {
    imagePath: "/adsorbml_min.png",
    title: "AdsorbML: A Leap in Efficiency for Adsorption Energy Calculations using Generalizable Machine Learning Potentials",
    authors: "Janice Lan*, Aini Palizhati*, Muhammed Shuaibi*, Brandon M. Wood*, Brook Wander, Abhishek Das, Matt Uyttendaele, C. Lawrence Zitnick, Zachary W. Ulissi",
    skills: [
    ],
    link: "https://www.nature.com/articles/s41524-023-01121-5",
    journal: "npj Comput. Mater. 2023"
  },
  {
    imagePath: "/oc22_min.png",
    title: "The Open Catalyst 2022 (OC22) Dataset and Challenges for Oxide Electrocatalysts",
    authors: "Richard Tran*, Janice Lan*, Muhammed Shuaibi*, Brandon M. Wood*, Siddharth Goyal*, Abhishek Das, Javier Heras-Domingo, Adeesh Kolluru, Ammar Rizvi, Nima Shoghi, Anuroop Sriram, Felix Therrien, Jehad Abed, Oleksandr Voznyy, Edward H. Sargent, Zachary Ulissi, C. Lawrence Zitnick",
    skills: [
    ],
    link: "https://arxiv.org/abs/2206.08917",
    journal: "ACS Catalysis 2023"
  },
  {
    imagePath: "/OC20.jpg",
    title: "The Open Catalyst 2020 (OC20) Dataset and Community Challenges)",
    authors: "Lowik Chanussot*, Abhishek Das*, Siddharth Goyal*, Thibaut Lavril*, Muhammed Shuaibi*, Morgane Riviere, Kevin Tran, Javier Heras-Domingo, Caleb Ho, Weihua Hu, Aini Palizhati, Anuroop Sriram, Brandon Wood, Junwoong Yoon, Devi Parikh, C. Lawrence Zitnick, Zachary Ulissi",
    skills: [
    ],
    link: "https://arxiv.org/abs/2010.09990",
    journal: "ACS Catalysis 2021",
  },


];


export default function Publications() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
    <div className="text-2xl font-medium mb-0">Research</div>
    <div className="text-l font-medium mb-2">(Selected Publications)</div>
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
                  {project.authors}
                </CardDescription>
		<CardDescription className="py-3 text-muted-foreground text-xs font-bold">
                  {project.journal}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
		    <Badge
		      key={index}
		      href={skill.url}
		    >
		      {skill.name}
		    </Badge>
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
