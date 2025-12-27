"use client";

import { useState } from 'react';
import { SKILLS_DATA, PROJECTS_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { suggestSkills } from "@/ai/flows/auto-suggest-skills-from-project-descriptions";
import { Wand2, PlusCircle, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// function SkillSuggestionTool({ onAddSkill, currentSkills }: { onAddSkill: (skill: string) => void, currentSkills: string[] }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [suggestedSkills, setSuggestedSkills] = useState<{ skill: string; confidence: number }[]>([]);

//   const handleSuggestSkills = async () => {
//     setIsLoading(true);
//     setSuggestedSkills([]);
//     const projectDescriptions = PROJECTS_DATA.projects.map(p => p.description);
//     try {
//       const result = await suggestSkills({ projectDescriptions });
//       // Filter out skills that are already present (case-insensitive)
//       const currentSkillsLower = currentSkills.map(s => s.toLowerCase());
//       const newSuggestions = result.suggestedSkills.filter(
//         suggestion => !currentSkillsLower.includes(suggestion.skill.toLowerCase())
//       );
//       setSuggestedSkills(newSuggestions);
//     } catch (error) {
//       console.error("Error suggesting skills:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleAddSkill = (skill: string) => {
//     onAddSkill(skill);
//     setSuggestedSkills(prev => prev.filter(s => s.skill !== skill));
//   };

//   return (
//     <Card className="mt-8 bg-muted/30">
//       <CardHeader>
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//           <div className="mb-4 sm:mb-0">
//              <CardTitle className="flex items-center gap-2 font-headline">
//               <Wand2 className="h-5 w-5 text-primary" />
//               AI-Powered Skill Endorsements
//             </CardTitle>
//             <CardDescription className="mt-1">Analyze project descriptions to suggest relevant skills.</CardDescription>
//           </div>
//           <Button onClick={handleSuggestSkills} disabled={isLoading}>
//             {isLoading ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Analyzing...
//               </>
//             ) : (
//               "Suggest Skills"
//             )}
//           </Button>
//         </div>
//       </CardHeader>
//       {suggestedSkills.length > 0 && (
//         <CardContent>
//           <p className="text-sm font-medium mb-4">Click to add suggested skills:</p>
//           <div className="flex flex-wrap gap-2">
//             {suggestedSkills.map(({ skill, confidence }) => (
//               <button
//                 key={skill}
//                 onClick={() => handleAddSkill(skill)}
//                 className="flex items-center gap-2 rounded-full border border-primary/50 bg-transparent px-3 py-1 text-sm text-primary transition-colors hover:bg-primary/10"
//                 title={`Confidence: ${Math.round(confidence * 100)}%`}
//               >
//                 <PlusCircle className="h-4 w-4" />
//                 {skill}
//               </button>
//             ))}
//           </div>
//         </CardContent>
//       )}
//     </Card>
//   );
// }

export function Skills() {
  const { title, description, skills: initialSkills } = SKILLS_DATA;
  const [skills, setSkills] = useState<string[]>(initialSkills);

  const addSkill = (newSkill: string) => {
    if (!skills.find(skill => skill.toLowerCase() === newSkill.toLowerCase())) {
      setSkills(prev => [...prev, newSkill]);
    }
  };

  return (
    <section id="skills" className="bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {skills.map(skill => (
            <Badge key={skill} className="px-4 py-2 text-base transition-transform hover:scale-105" variant="default">
              {skill}
            </Badge>
          ))}
        </div>
        
        {/* <SkillSuggestionTool onAddSkill={addSkill} currentSkills={skills} /> */}
      </div>
    </section>
  );
}
