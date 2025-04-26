import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Welcome to ProjXpt! Which service do you need?",
      sender: "bot",
      buttons: [
        { label: "Web Design", value: "web_design" },
        { label: "AI Model", value: "ai_model" },
        { label: "AI Integration", value: "ai_integration" },
        { label: "Final Year Projects", value: "final_year_projects" },
        { label: "Cloud Projects", value: "cloud_projects" },
      ],
    },
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const mainMenuButtons = [
    { label: "Web Design", value: "web_design" },
    { label: "AI Model", value: "ai_model" },
    { label: "AI Integration", value: "ai_integration" },
    { label: "Final Year Projects", value: "final_year_projects" },
    { label: "Cloud Projects", value: "cloud_projects" },
  ];

  const handleButtonClick = (value, label) => {
    if (value === "back_to_main") {
      setMessages((prev) => [
        ...prev,
        {
          text: "Welcome back! Choose a service:",
          sender: "bot",
          buttons: mainMenuButtons,
        },
      ]);
      return;
    }

    setMessages((prev) => [...prev, { text: label, sender: "user" }]);

    setTimeout(
      () => {
        let nextMessage = {};
        switch (value) {
          case "web_design":
            nextMessage = {
              text: "Great! What's your project timeline for Web Design?",
              sender: "bot",
              buttons: [
                { label: "ASAP", value: "timeline_asap_web_design" },
                { label: "1-3 Months", value: "timeline_1_3_web_design" },
                { label: "Flexible", value: "timeline_flexible_web_design" },
              ],
            };
            break;
          case "ai_model":
            nextMessage = {
              text: "Awesome! What's your budget for the AI Model?",
              sender: "bot",
              buttons: [
                { label: "Under $2,000", value: "budget_low_ai_model" },
                { label: "$2,000-$10,000", value: "budget_mid_ai_model" },
                { label: "Over $10,000", value: "budget_high_ai_model" },
              ],
            };
            break;
          case "ai_integration":
            nextMessage = {
              text: "Nice! What type of AI Integration do you need?",
              sender: "bot",
              buttons: [
                { label: "Chatbot", value: "integration_chatbot" },
                { label: "Analytics", value: "integration_analytics" },
                { label: "Custom", value: "integration_custom" },
              ],
            };
            break;
          case "final_year_projects":
            nextMessage = {
              text: "Cool! What's the domain for your Final Year Project?",
              sender: "bot",
              buttons: [
                { label: "Web App", value: "domain_web_app" },
                { label: "AI/ML", value: "domain_ai_ml" },
                { label: "Cloud", value: "domain_cloud" },
              ],
            };
            break;
          case "cloud_projects":
            nextMessage = {
              text: "Perfect! Which cloud platform for your Cloud Project?",
              sender: "bot",
              buttons: [
                { label: "AWS", value: "platform_aws" },
                { label: "Azure", value: "platform_azure" },
                { label: "Google Cloud", value: "platform_gcp" },
              ],
            };
            break;
          case "timeline_asap_web_design":
          case "timeline_1_3_web_design":
          case "timeline_flexible_web_design":
            nextMessage = {
              text: "Thanks! Contact us on WhatsApp to discuss your Web Design project!",
              sender: "bot",
              buttons: [
                {
                  label: "Contact Now",
                  value: "contact_web_design",
                  link: "https://wa.me/9944725360?text=Hello%20Web%20Design",
                },
              ],
            };
            break;
          case "budget_low_ai_model":
          case "budget_mid_ai_model":
          case "budget_high_ai_model":
            nextMessage = {
              text: "Got it! Contact us on WhatsApp to start your AI Model project!",
              sender: "bot",
              buttons: [
                {
                  label: "Contact Now",
                  value: "contact_ai_model",
                  link: "https://wa.me/9944725360?text=Hello%20AI%20Model",
                },
              ],
            };
            break;
          case "integration_chatbot":
          case "integration_analytics":
          case "integration_custom":
            nextMessage = {
              text: "Excellent! Contact us on WhatsApp to plan your AI Integration!",
              sender: "bot",
              buttons: [
                {
                  label: "Contact Now",
                  value: "contact_ai_integration",
                  link: "https://wa.me/9944725360?text=Hello%20AI%20Integration",
                },
              ],
            };
            break;
          case "domain_web_app":
          case "domain_ai_ml":
          case "domain_cloud":
            nextMessage = {
              text: "Awesome! Contact us on WhatsApp to finalize your Final Year Project!",
              sender: "bot",
              buttons: [
                {
                  label: "Contact Now",
                  value: "contact_final_year_projects",
                  link: "https://wa.me/9944725360?text=Hello%20Final%20Year%20Projects",
                },
              ],
            };
            break;
          case "platform_aws":
          case "platform_azure":
          case "platform_gcp":
            nextMessage = {
              text: "Great! Contact us on WhatsApp to kick off your Cloud Project!",
              sender: "bot",
              buttons: [
                {
                  label: "Contact Now",
                  value: "contact_cloud_projects",
                  link: "https://wa.me/9944725360?text=Hello%20Cloud%20Projects",
                },
              ],
            };
            break;
          case "contact_web_design":
          case "contact_ai_model":
          case "contact_ai_integration":
          case "contact_final_year_projects":
          case "contact_cloud_projects":
            nextMessage = {
              text: "Thanks for choosing ProjXpt! How else can we assist you?",
              sender: "bot",
              buttons: [...mainMenuButtons],
            };
            break;
          default:
            nextMessage = {
              text: "Oops, something went wrong. Please select a service.",
              sender: "bot",
              buttons: [...mainMenuButtons],
            };
        }

        setMessages((prev) => [...prev, nextMessage]);
      },
      value.startsWith("contact_") ? 2000 : 500
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Attention-Grabbing Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg animate-bounce hover:scale-110 transition-transform"
          aria-label="Need Help? Chat with ProjXpt Bot"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-80 md:w-96 h-[480px] bg-gradient-to-br from-purple-500 via-pink-500 to-purple-700 rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-purple-700 text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/advisor.png" alt="ProjXpt Logo" className="h-6 w-6" />
              <h3 className="font-semibold text-base">ProjXpt Bot</h3>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:text-gray-200"
              aria-label="Close ProjXpt Bot"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto bg-white">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-xl text-sm ${
                    msg.sender === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src="/advisor.png"
                        alt="ProjXpt Bot Avatar"
                        className="h-5 w-5 rounded-full"
                      />
                      <span className="text-xs text-gray-400">ProjXpt Bot</span>
                    </div>
                  )}
                  <p className="hover:text-purple-700 transition-colors">
                    {msg.text}
                  </p>
                  {msg.buttons && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.buttons.map((btn, btnIndex) => (
                        <Button
                          key={btnIndex}
                          onClick={() =>
                            btn.link
                              ? window.open(btn.link, "_blank")
                              : handleButtonClick(btn.value, btn.label)
                          }
                          variant="outline"
                          size="sm"
                          className="border-purple-600 text-purple-600 hover:bg-purple-100 text-xs transition-all"
                          aria-label={btn.label}
                        >
                          {btn.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
