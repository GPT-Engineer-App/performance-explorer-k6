import { useState, useEffect } from "react";
import { Cat, Heart, Info, Paw, Moon, Sun, Star, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const CatFact = ({ fact }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 relative overflow-hidden"
  >
    <motion.div
      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
    <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">{fact}</p>
    <motion.div
      className="absolute bottom-2 right-2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <Star className="text-yellow-400" size={20} />
    </motion.div>
  </motion.div>
);

const catFacts = [
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  "A group of cats is called a 'clowder'.",
  "Cats spend 70% of their lives sleeping.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats have a third eyelid called the 'haw' to protect their eyes.",
  "A cat's hearing is much more sensitive than a human's or dog's.",
  "Cats can jump up to six times their length.",
  "A cat's sense of smell is 14 times stronger than a human's.",
];

const catImages = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

const Index = () => {
  const [showFact, setShowFact] = useState(false);
  const [currentFact, setCurrentFact] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [factCount, setFactCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleShowFact = () => {
    const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    setCurrentFact(randomFact);
    setShowFact(true);
    setFactCount(prevCount => prevCount + 1);
    toast({
      title: "New Cat Fact!",
      description: "Did you know? Cats are fascinating creatures!",
      duration: 3000,
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-purple-100 to-pink-100'} p-8 transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="fixed top-4 right-4 z-50 flex items-center space-x-4"
        >
          <Badge variant="outline" className="py-2">
            <Coffee className="mr-2 h-4 w-4" /> Facts Learned: {factCount}
          </Badge>
          <Button
            onClick={toggleDarkMode}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-6xl font-bold text-purple-800 dark:text-purple-300 flex items-center justify-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Cat className="mr-4 text-pink-600 dark:text-pink-400" size={64} />
            Feline Fascination
          </motion.h1>
          <motion.p 
            className="text-xl mt-4 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Explore the wonderful world of cats!
          </motion.p>
        </motion.div>

        <Carousel className="mb-8">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={src}
                    alt={`Cute cat ${index + 1}`}
                    className="mx-auto object-cover w-full h-[500px] rounded-xl shadow-2xl"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Card className="mb-8 dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center">
              <Info className="mr-2 text-blue-500" /> About Cats
            </CardTitle>
            <CardDescription>Discover the world of our feline friends</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
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
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Feline Features</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                  {[
                    "Excellent hunters with sharp claws and teeth",
                    "Flexible bodies and quick reflexes",
                    "Keen senses, especially hearing and night vision",
                    "Soft fur and a variety of coat patterns",
                    "Communicate through vocalizations, body language, and scent"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <Paw className="mr-2 text-pink-500 dark:text-pink-400" size={16} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Cat Breeds</CardTitle>
                <CardDescription>Explore popular cat breeds</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {[
                    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature" },
                    { name: "Maine Coon", description: "Large, fluffy cats with tufted ears" },
                    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious coats" },
                    { name: "Bengal", description: "Wild-looking cats with spotted or marbled coats" },
                    { name: "Scottish Fold", description: "Characterized by their folded ears and round faces" }
                  ].map((breed, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <strong className="text-purple-600 dark:text-purple-400">{breed.name}:</strong> {breed.description}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleShowFact}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:shadow-lg"
            >
              <Heart className="mr-2" /> Show Cat Fact
            </Button>
          </motion.div>
        </div>

        <AnimatePresence>
          {showFact && <CatFact fact={currentFact} />}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-purple-700 dark:text-purple-300">Your Cat Knowledge Progress</h2>
          <Progress value={factCount * 10} className="w-full h-4" />
          <p className="text-center mt-2 text-gray-600 dark:text-gray-400">
            {factCount} / 10 facts learned
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
