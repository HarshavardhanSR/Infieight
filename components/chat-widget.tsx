"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";

type ChatMessage = {
  id: number;
  from: "assistant" | "visitor";
  text: string;
};

const quickQuestions = [
  "What services do you offer?",
  "How do I get started?",
  "Can I see your pricing?",
];

function getReply(message: string) {
  const query = message.toLowerCase();

  if (query.includes("service") || query.includes("website") || query.includes("seo") || query.includes("app")) {
    return "We work across web design and development, search, paid media, brand identity, product experiences, and AI automation.";
  }
  if (query.includes("price") || query.includes("cost") || query.includes("pricing")) {
    return "Website packages start at ₹3,999. Scope and final pricing are confirmed together before work begins.";
  }
  if (query.includes("start") || query.includes("contact") || query.includes("talk") || query.includes("project")) {
    return "Share a little about your project on our contact page. We’ll use that to shape a useful first conversation.";
  }
  if (query.includes("time") || query.includes("long") || query.includes("timeline")) {
    return "Timing depends on the scope. Tell us what you’re planning and we can discuss a realistic schedule.";
  }

  return "Thanks for sharing that. I can help with services, pricing, and how to get started. For anything specific, send us a note and we’ll take it from there.";
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      from: "assistant",
      text: "Hello! I’m the INFIEIGHT site assistant. What would you like to know?",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { id: Date.now(), from: "visitor", text: trimmed },
      { id: Date.now() + 1, from: "assistant", text: getReply(trimmed) },
    ]);
    setDraft("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(draft);
  }

  return (
    <div className="chat-widget">
      {isOpen ? (
        <section
          aria-label="INFIEIGHT chat assistant"
          className="chat-panel"
          role="dialog"
          aria-modal="false"
        >
          <div className="chat-panel-header">
            <div className="chat-avatar" aria-hidden="true">I8</div>
            <div className="chat-heading">
              <h2>INFIEIGHT</h2>
              <p><span /> Site assistant</p>
            </div>
            <button
              aria-label="Close chat"
              className="chat-close"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              ×
            </button>
          </div>
          <div className="chat-messages" aria-live="polite">
            {messages.map((message) => (
              <p
                className={`chat-message chat-message-${message.from}`}
                key={message.id}
              >
                {message.text}
              </p>
            ))}
            {messages.length === 1 ? (
              <div className="chat-quick-questions">
                {quickQuestions.map((question) => (
                  <button
                    className="chat-quick-question"
                    key={question}
                    onClick={() => sendMessage(question)}
                    type="button"
                  >
                    {question} <span aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>
            ) : null}
            {messages.length > 1 ? (
              <Link className="chat-contact-link" href="/contact">
                Let&apos;s talk about your project <span aria-hidden="true">↗</span>
              </Link>
            ) : null}
          </div>
          <form className="chat-input-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="chat-message">Write a message</label>
            <input
              autoComplete="off"
              id="chat-message"
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Write a message..."
              ref={inputRef}
              value={draft}
            />
            <button aria-label="Send message" disabled={!draft.trim()} type="submit">
              <span aria-hidden="true">↑</span>
            </button>
          </form>
          <p className="chat-disclosure">Automated replies · No message is sent until you contact us</p>
        </section>
      ) : null}
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close INFIEIGHT chat" : "Chat with INFIEIGHT"}
        className={`chat-launcher${isOpen ? " chat-launcher-open" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2 1-4a7.5 7.5 0 1 1 16-5.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
          <path d="M8 11.5h8M8 14.5h5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
        <span>{isOpen ? "Close" : "Let’s chat"}</span>
      </button>
    </div>
  );
}
