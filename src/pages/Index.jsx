import { useState, useEffect } from "react";
import { Cat, Heart, Info, Paw, Moon, Sun, Star, Coffee, Sparkles, Gift, Brain, Smile, Frown, Meh, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

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
  const [catName, setCatName] = useState("");
  const [showNameDialog, setShowNameDialog] = useState(true);
  const [confettiActive, setConfettiActive] = useState(false);
  const [quizActive, setQuizActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [catMood, setCatMood] = useState(50);
  const [showCareDialog, setShowCareDialog] = useState(false);
  const { toast } = useToast();

  const quizQuestions = [
    {
      question: "How many hours do cats typically sleep in a day?",
      options: ["8-10 hours", "12-14 hours", "16-20 hours", "22-23 hours"],
      correctAnswer: 2
    },
    {
      question: "What is a group of cats called?",
      options: ["A pride", "A clowder", "A pack", "A colony"],
      correctAnswer: 1
    },
    {
      question: "Which of these is NOT a recognized cat breed?",
      options: ["Sphynx", "Munchkin", "Savannah", "Doberman"],
      correctAnswer: 3
    },
    {
      question: "What is the average lifespan of a domestic cat?",
      options: ["5-8 years", "10-12 years", "13-17 years", "20-25 years"],
      correctAnswer: 2
    },
    {
      question: "Which sense is most developed in cats compared to humans?",
      options: ["Sight", "Smell", "Hearing", "Taste"],
      correctAnswer: 2
    }
  ];

  const catCareTips = [
    "Provide fresh water daily and clean the water bowl regularly.",
    "Feed your cat a balanced diet appropriate for their age and health status.",
    "Brush your cat's teeth regularly to prevent dental issues.",
    "Provide scratching posts to keep their claws healthy and protect your furniture.",
    "Regular vet check-ups are essential for maintaining your cat's health.",
    "Keep the litter box clean and in a quiet, accessible location.",
    "Spend time playing with your cat to provide mental and physical stimulation.",
    "Groom your cat regularly, especially if they have long hair.",
    "Create a safe indoor environment with plenty of hiding spots and high perches.",
    "Consider microchipping your cat for identification in case they get lost."
  ];

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleShowFact = () => {
    const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    setCurrentFact(randomFact);
    setShowFact(true);
    setFactCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount % 5 === 0) {
        setConfettiActive(true);
        setTimeout(() => setConfettiActive(false), 3000);
      }
      return newCount;
    });
    toast({
      title: "New Cat Fact!",
      description: "Did you know? Cats are fascinating creatures!",
      duration: 3000,
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setShowNameDialog(false);
    toast({
      title: "Welcome!",
      description: `Hello, ${catName}! Let's learn about cats together!`,
      duration: 3000,
    });
  };

  useEffect(() => {
    document.body.style.cursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%23ff69b4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z'/%3E%3Cpath d='M8 14v.5'/%3E%3Cpath d='M16 14v.5'/%3E%3Cpath d='M11.25 16.25h1.5L12 17l-.75-.75Z'/%3E%3C/svg%3E"), auto`;
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100'} p-8 transition-colors duration-300`}>
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
          <Badge variant="outline" className="py-2">
            <Brain className="mr-2 h-4 w-4" /> Quiz Score: {score}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="fixed top-4 left-4 z-50"
        >
          <Button
            onClick={() => setShowCareDialog(true)}
            variant="outline"
            className="rounded-full"
          >
            <HelpCircle className="mr-2 h-4 w-4" /> Cat Care Tips
          </Button>
        </motion.div>

        <Dialog open={showNameDialog} onOpenChange={setShowNameDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome to Feline Fascination!</DialogTitle>
              <DialogDescription>
                Before we start, what's your cat's name? (Or your favorite cat name if you don't have one)
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleNameSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Cat Name
                  </Label>
                  <Input
                    id="name"
                    value={catName}
                    onChange={(e) => setCatName(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit">Start Learning</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {confettiActive && (
          <div className="fixed inset-0 pointer-events-none z-50">
            <div className="absolute inset-0 overflow-hidden">
              <div className="relative w-full h-full">
                {[...Array(50)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-2 h-2 bg-pink-500 rounded-full"
                    initial={{
                      x: "50%",
                      y: "60%",
                      scale: 0,
                    }}
                    animate={{
                      x: `${Math.random() * 100}%`,
                      y: `${Math.random() * 100}%`,
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeOut",
                      times: [0, 0.2, 1],
                      delay: Math.random() * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
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
            Explore the wonderful world of cats with {catName}!
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
              <Gift className="mr-2" /> Reveal Cat Fact
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <Sparkles className="inline-block mr-2 text-yellow-400" />
            Each fact you learn brings you closer to becoming a cat expert!
          </p>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-purple-700 dark:text-purple-300">{catName}'s Mood Tracker</h2>
          <div className="flex items-center justify-center space-x-4">
            <Frown className="text-red-500" size={24} />
            <Slider
              value={[catMood]}
              onValueChange={(value) => setCatMood(value[0])}
              max={100}
              step={1}
              className="w-64"
            />
            <Smile className="text-green-500" size={24} />
          </div>
          <p className="text-center mt-2 text-gray-600 dark:text-gray-400">
            {catMood < 33 ? "Your cat seems unhappy. Try some playtime!" : 
             catMood < 66 ? "Your cat is content. A treat might cheer them up!" : 
             "Your cat is purr-fectly happy!"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-8 text-center"
        >
          <Button
            onClick={() => setQuizActive(true)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:shadow-lg"
          >
            <Brain className="mr-2" /> Start Cat Quiz
          </Button>
        </motion.div>

        <Dialog open={quizActive} onOpenChange={setQuizActive}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cat Trivia Quiz</DialogTitle>
              <DialogDescription>
                Test your cat knowledge!
              </DialogDescription>
            </DialogHeader>
            {currentQuestion < quizQuestions.length ? (
              <>
                <h3 className="text-lg font-semibold mb-4">{quizQuestions[currentQuestion].question}</h3>
                <RadioGroup onValueChange={(value) => {
                  if (parseInt(value) === quizQuestions[currentQuestion].correctAnswer) {
                    setScore(score + 1);
                  }
                  if (currentQuestion < quizQuestions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                  } else {
                    setQuizActive(false);
                    toast({
                      title: "Quiz Completed!",
                      description: `You scored ${score + 1} out of ${quizQuestions.length}`,
                      duration: 5000,
                    });
                    setCurrentQuestion(0);
                    setScore(0);
                  }
                }}>
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Quiz Completed!</h3>
                <p className="text-lg mb-4">You scored {score} out of {quizQuestions.length}</p>
                <Button onClick={() => {
                  setQuizActive(false);
                  setCurrentQuestion(0);
                  setScore(0);
                }}>Close</Button>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={showCareDialog} onOpenChange={setShowCareDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cat Care Tips</DialogTitle>
              <DialogDescription>
                Essential tips for keeping your feline friend happy and healthy!
              </DialogDescription>
            </DialogHeader>
            <ul className="list-disc pl-5 space-y-2">
              {catCareTips.map((tip, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {tip}
                </motion.li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Index;
