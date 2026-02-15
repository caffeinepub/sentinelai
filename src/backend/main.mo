import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

actor {
  let content = Map.fromIter([
    (
      "What is Nexus Forge AI?",
      "Nexus Forge AI is a cutting-edge cognitive OS that seamlessly integrates software agents, personal computing, and onchain infrastructure. It connects open source AI with smart contracts, enabling autonomous agents and streamlining software management for the next era of intelligent applications."
    ),
    (
      "How does Nexus Forge ensure data privacy?",
      "Nexus Forge AI maintains user data ownership and privacy by leveraging zero-knowledge proofs and secure enclaves. This allows users to control their data while interacting with decentralized AI agents and applications."
    ),
    (
      "What platforms does Nexus Forge support?",
      "Nexus Forge is designed to be cross-platform, running on smart devices, secure cloud infrastructure, and virtual environments. It supports integration with Web3 technologies, enabling interoperability across different blockchain networks."
    ),
    (
      "What are the core features of Nexus Forge?",
      "Core features of Nexus Forge AI include autonomous software agents, a decentralized marketplace for services, cognitive security modules, and seamless software provisioning. It delivers a comprehensive suite of tools for digital asset management, network automation, and AI-driven business intelligence."
    ),
    (
      "How can I get started with Nexus Forge AI?",
      "To get started with Nexus Forge, visit the official Nexus Forge website for detailed documentation, tutorials, and community resources. You can also connect with our team for personalized onboarding and support."
    ),
  ].values());

  public shared ({ caller }) func getAnswer(question : Text) : async Text {
    let lowerQuestion = question.toLower();
    let bestMatch = content.entries().find(
      func((q, _)) {
        q.toLower().contains(#text lowerQuestion);
      }
    );

    switch (bestMatch) {
      case (?(matchedQuestion, answer)) {
        if (matchedQuestion.toLower() == lowerQuestion) {
          answer;
        } else {
          "Nexus Forge AI couldn't find an exact match for your question. Here's a related answer: " # answer;
        };
      };
      case (null) {
        let partialMatch = content.entries().find(
          func((q, _)) {
            q.toLower().contains(#text lowerQuestion);
          }
        );
        switch (partialMatch) {
          case (?(_, answer)) {
            "Nexus Forge AI couldn't find an exact match for your question. Here's a similar answer: " # answer;
          };
          case (null) {
            "Nexus Forge AI couldn't find an answer to your question. Please try rephrasing or ask about core Nexus Forge AI features, data privacy, or platform support.";
          };
        };
      };
    };
  };

  public query ({ caller }) func healthy() : async Bool {
    true;
  };
};
