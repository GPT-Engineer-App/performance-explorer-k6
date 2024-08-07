import { useState } from "react";
import { Cat, Heart, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const CatFact = ({ fact }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-4 rounded-lg shadow-md mb-4"
  >
    <p className="text-gray-800">{fact}</p>
  </motion.div>
);

const catFacts = [
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  "A group of cats is called a 'clowder'.",
  "Cats spend 70% of their lives sleeping.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats have a third eyelid called the 'haw' to protect their eyes.",
];

const Index = () => {
  const [showFact, setShowFact] = useState(false);
  const [currentFact, setCurrentFact] = useState("");

  const handleShowFact = () => {
    const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    setCurrentFact(randomFact);
    setShowFact(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-8 text-center text-purple-800 flex items-center justify-center"
        >
          <Cat className="mr-4 text-pink-600" size={48} />
          Feline Fascination
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover w-full h-[500px] rounded-xl shadow-2xl mb-8"
          />
        </motion.div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center">
              <Info className="mr-2 text-blue-500" /> About Cats
            </CardTitle>
            <CardDescription>Discover the world of our feline friends</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-4 text-gray-700 leading-relaxed">
              Cats, with their enigmatic charm and graceful demeanor, have captivated human hearts for millennia. These independent yet affectionate creatures are known for their agility, keen senses, and complex personalities. From their soft purrs to their playful antics, cats continue to be beloved companions in homes around the world.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="characteristics" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle>Feline Features</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Excellent hunters with sharp claws and teeth</li>
                  <li>Flexible bodies and quick reflexes</li>
                  <li>Keen senses, especially hearing and night vision</li>
                  <li>Soft fur and a variety of coat patterns</li>
                  <li>Communicate through vocalizations, body language, and scent</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Cat Breeds</CardTitle>
                <CardDescription>Explore popular cat breeds</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Siamese:</strong> Known for their distinctive coloring and vocal nature</li>
                  <li><strong>Maine Coon:</strong> Large, fluffy cats with tufted ears</li>
                  <li><strong>Persian:</strong> Recognizable by their flat faces and long, luxurious coats</li>
                  <li><strong>Bengal:</strong> Wild-looking cats with spotted or marbled coats</li>
                  <li><strong>Scottish Fold:</strong> Characterized by their folded ears and round faces</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button
            onClick={handleShowFact}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Heart className="mr-2" /> Show Cat Fact
          </Button>
        </div>

        {showFact && <CatFact fact={currentFact} />}
      </div>
    </div>
  );
};

export default Index;
