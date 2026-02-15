import Map "mo:core/Map";

module {
  type OldActor = {
    curatedAnswers : Map.Map<Text, Text>;
  };

  type NewActor = {
    curatedAnswers : Map.Map<Text, Text>;
  };

  func defaultCuratedAnswers() : Map.Map<Text, Text> {
    Map.fromIter([
      (
        "core introduction",
        "Nexus Forge AI is an open source cognitive operating system that acts as a bridge between crypto technology and smart agent ecosystems. It enables secure, private agents to interact with both Web3 dApps and AI services, creating a decentralized digital trust layer. Nexus Forge AI handles software automation, system orchestration, and data privacy – empowering users and enterprises to build intelligent, self-governing solutions without centralized control. At its core, Nexus Forge AI runs persistent workflows called Agents. Agents can automate financial transactions, optimize business processes, and facilitate trusted AI integrations across decentralized networks. The OS manages software dependencies, cloud provisioning, and cross-platform deployments, creating a seamless experience for onchain and smart software solutions. Nexus Forge combines secure enclaves, zero-knowledge proofs, and interoperable crypto protocols to ensure data ownership, high integrity, and trusted automation in digital ecosystems."
      ),
      (
        "What is Nexus Forge AI?",
        "Nexus Forge AI is an open source cognitive operating system that acts as a bridge between crypto technology and smart agent ecosystems. It enables secure, private agents to interact with both Web3 dApps and AI services, creating a decentralized digital trust layer."
      ),
      (
        "What does Nexus Forge AI do?",
        "Nexus Forge AI automates software provisioning, workflow management, and secure interactions between crypto, AI, and autonomous agent systems. It manages complex infrastructure, persistent agents, and digital asset transactions using decentralized secure enclaves and cross-platform compatibility."
      ),
      (
        "core capabilities",
        "Nexus Forge AI offers quantum safe security, decentralized agent management, interoperability across cloud, PC, and mobile, zero-trust network authentication, automated software builds and deployment, AI orchestration, and persistent onchain workflow management."
      ),
      (
        "How does Nexus Forge AI work?",
        "Nexus Forge AI utilizes a decentralized network of secure enclaves and identity containers. It enables cross-platform agent deployments, persistent workflow orchestration, encrypted zerotrust connectivity, and onchain smart contract integration. The system provides a seamless bridge between crypto, AI, and autonomous agents."
      ),
      (
        "onchain guardians",
        "OnChain Guardians are persistent agent workflows that automate financial tasks, manage digital assets, process transactions, and execute complex protocols. They provide trusted automation and composability across crypto and smart contract systems using decentralized AI-powered agents."
      ),
      (
        "smart zones",
        "SmartZones enable verified containers for secure agent interactions, AI services, decentralized computation marketplaces, and enterprise cloud integrations. They offer environment isolation, ledger verification, multi-cloud interoperability, and trustless access to computational resources."
      ),
      (
        "zero trust privacy",
        "Nexus Forge AI integrates confidential environments, zero-knowledge proofs, decentralized key management, encrypted agent communications, and AI/crypto privacy protection protocols. Users maintain full data ownership and access anonymous digital experiences securely across networks."
      ),
      (
        "interoperability",
        "The system enables seamless cross-platform interoperability, multi-cloud support, edge computing integration, multi-agent orchestration, universal digital identity and credential management, and cross-chain onchain smart contract compatibility."
      ),
      (
        "supported use cases",
        "Finance automation, autonomous agent/software provisioning, decentralized AI orchestration, secure enterprise cloud integrations, persistent data management, trusted supply chain tracking, IoT/edge device verification, multi-agent simulation, and secure cross-network interoperability."
      ),
      (
        "How do I get started?",
        "Visit the Nexus Forge AI documentation portal, join the community forum, or contact the support team for onboarding assistance. The platform provides enterprise implementation guides, SDKs, open source code, and developer resources for building protocols and systems."
      ),
    ].values());
  };

  public func run(old : OldActor) : NewActor {
    if (old.curatedAnswers.isEmpty()) {
      { curatedAnswers = defaultCuratedAnswers() };
    } else {
      { curatedAnswers = old.curatedAnswers };
    };
  };
};
