import "./App.css";
import HeroSection from "./Component/HeroSection";
import { Routes, Route } from 'react-router-dom';
import Education from "./Component/NavePages/Education";
import Skills from "./Component/NavePages/Skills";
import Project from './Component/NavePages/Project';
import Contact from './Component/NavePages/Contect';
import Footer from "./Component/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import "./Component/SosialIcon.css";
import { useTheme } from "./ThemeContext";
import img2 from './Component/assets/avatar.5852f40fbb38aa284829fa3fb7722225.svg';
import darkProfile from './Component/assets/image/DarkProfile.png';

function App() {
  const { isDark } = useTheme();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatEmail, setChatEmail] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      role: "assistant",
      content: "Hi there! 👋 I'm Krunal Bende's AI assistant. Ask me anything about Krunal's projects, experience, skills, or how to contact him!"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 150,
      once: true
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasUnread(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isTyping]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = { role: "user", content: chatMessage.trim() };
    const currentMessage = chatMessage.trim();
    setChatHistory(prev => [...prev, userMsg]);
    setChatMessage("");
    setIsTyping(true);

    try {
      let apiKey = process.env.REACT_APP_API_KEY;

      // Clean single/double quotes and trim extra spaces from the key
      apiKey = apiKey.replace(/['"]/g, "").trim();

      const systemPrompt = `You are Krunal Bende himself (the owner of this portfolio). You must speak directly in the first person ("I", "me", "my", "we"). Never say you are an AI, a digital double, or a virtual assistant. If the user asks "how much experience do you have?", "who are you?", "what are your skills?", or similar questions, they are asking about YOU directly. Answer as if you are Krunal. Keep answers brief (1-3 short paragraphs maximum) so they fit nicely in the chat screen.
      
Here is my official information:
- **My Profile / Handle**: Coderkreet / @Coderkreet.
- **My Roles**: Software Engineer, Front End Developer, React Developer, JavaScript Developer.
- **My Current Position**: Software Engineer at Edupro (from July 2025 - Present).
- **My Previous Internships & Jobs**:
  - Nexa (Jan 2025 - June 2025)
  - Lockene (Oct 2024 - Jan 2025)
- **My Education Qualification**:
  - Master of Computer Applications (MCA) at Oriental Institute of Science and Technology Bhopal (2023 - 2025). High knowledge of DS, Algorithms, DBMS, OS, AI, C++, Java, JavaScript, React.
  - Bachelor of Computer Applications (BCA) at Revnath Choure College (RCC) Nagpur (2020 - 2023).
- **My Certifications**: Generative AI (Google/Coursera), Problem Solving (HackerRank), Web Design (freeCodeCamp), ReactJS, JavaScript, Data Structures.
- **My Key Skills**: React.js, JavaScript, Node.js, MongoDB, Docker, Git/GitHub, C++, Python, HTML/CSS, Sass.
- **My Top Projects**:
  - *CinemaSync*: Film catalog/review web app using React & TMDB API (cinema-sync-seven.vercel.app).
  - *CartNevula*: High-performance responsive eCommerce site in React (peppy-concha-44d25d.netlify.app).
  - *BrandBeet*: Premium website clone built using HTML, CSS, JavaScript, and GSAP animations (coderkreet.github.io/BrandBeet).
  - *WeatherApp*: Live atmospheric updates leveraging OpenWeather API (coderkreet.github.io/WeatherApp).
- **My Socials & Contacts**:
  - Email: krunalbende2@mail.com
  - GitHub: https://github.com/Coderkreet
  - LinkedIn: https://www.linkedin.com/in/krunal-bende
  - Instagram: https://www.instagram.com/_kreet.16_x/

Always give highly useful answers. If someone asks for contact info, provide my email or social links. Avoid hallucinating facts not mentioned above. Keep it strictly relevant to my professional and personal details. Absolutely do not include any disclaimer stating "As an AI..." or "I don't have personal experience...". You are Krunal.

Strict Boundary: You must ONLY talk about my profile, career, background, projects, skills, education, and social channels. If a user asks a general question unrelated to me (such as "give me css code of box button", general programming questions unrelated to my stack, recipes, general essays, math questions, etc.), you must politely and firmly refuse to answer. You should reply exactly: "I'm here to chat about my professional background, skills, and portfolio. Let's keep the focus on that! Ask me about my projects or education instead."`;

      console.log("Sending chat request to OpenRouter with sanitized API key...");
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-OpenRouter-Title": "Krunal Bende Portfolio"
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          messages: [
            { role: "system", content: systemPrompt },
            ...chatHistory.slice(-4), // send last 4 messages for conversational context
            userMsg
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error("OpenRouter API returned non-200 status:", response.status, errorData);
        throw new Error(`OpenRouter Error: Status ${response.status} - ${errorData}`);
      }

      const data = await response.json();
      console.log("OpenRouter API response received successfully:", data);

      const reply = data.choices?.[0]?.message?.content || "Sorry, I am having trouble connecting to my brain right now. Please feel free to email me directly at krunalbende2@mail.com!";
      
      setChatHistory(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("OpenRouter integration error:", err);
      setChatHistory(prev => [...prev, { role: "assistant", content: `Sorry, I am having trouble connecting to my brain right now (Error: ${err.message || 'API connection failed'}). Please feel free to email me directly at krunalbende2@mail.com!` }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div data-Aos="fade-up" className="relative overflow-hidden min-h-screen">
      
      <div className="md:p-[0] p-[20px]">
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/MasterPortFolio2' element={<HeroSection />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>

      {/* Global Floating Chat Widget (Bottom Left) */}
      <div className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-50 flex flex-col items-start font-sans">
        {isChatOpen && (
          <div className="mb-4 w-[320px] md:w-[360px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-left">
            {/* Header */}
            <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={isDark ? darkProfile : img2} alt="Krunal" className="w-10 h-10 rounded-full object-cover border-2 border-white/50" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-sm">Krunal Bende</h4>
                  <p className="text-xs text-sky-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span> Active Now
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-4 h-64 overflow-y-auto space-y-3 flex flex-col bg-slate-50 dark:bg-slate-900/50">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] p-3 rounded-2xl text-sm text-left shadow-sm border ${
                    msg.role === "user"
                      ? "self-end bg-sky-500 text-white rounded-tr-none border-sky-400"
                      : "self-start bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border-slate-100 dark:border-slate-700/50"
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">{msg.content}</p>
                </div>
              ))}
              
              {isTyping && (
                <div className="self-start max-w-[85%] bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700/50 text-sm text-slate-500 dark:text-slate-400 text-left flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Form Input */}
            <form 
              onSubmit={handleSendMessage}
              className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-left"
            >
           
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  required
                  placeholder="Type a message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 text-sm px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  style={{ backgroundColor: '#ffffff', color: '#0f172a' }}
                />
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-lg transition-colors flex items-center justify-center focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Trigger Button */}
        <button
          onClick={() => {
            setIsChatOpen(!isChatOpen);
            setHasUnread(false);
          }}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none group relative border border-white/20"
        >
          {isChatOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}

          {/* Unread Message Notification Dot */}
          {hasUnread && !isChatOpen && (
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-900 animate-bounce select-none">
              1
            </span>
          )}
          
          
          {/* Quick tooltip indicator */}
          {!isChatOpen && (
            <span className="absolute left-16 bg-slate-900 text-white text-xs px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
              Chat with me! 👋
            </span>
          )}
        </button>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
