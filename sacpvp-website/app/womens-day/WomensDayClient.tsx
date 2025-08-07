"use client";

import Header from "@/components/global/header";
import {
  Heart,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  CheckCircle,
  Download,
  FileText,
  Calendar,
} from "lucide-react";
import styles from "./womens-day.module.css";

export default function WomensDayClient() {
  const vulnerabilityTriggers = [
    {
      title: "You want to be perfect",
      description:
        "Perfectionism can be your own worst enemy. The last thing you want is to say or do something that might be misconstrued, so you say nothing. If you don't have it all figured out, you'll sit this one out.",
    },
    {
      title: "You don't ask for what you need",
      description:
        "You know that you deserve that promotion. You want more intimacy in your relationship. But what if you don't get what you ask for? You're silent.",
    },
    {
      title: "You keep people at arm's length",
      description:
        "You've been hurt before, so you are not going to dive in and get hurt again. You stay busy at work, or home, or school — anything to keep you safe.",
    },
    {
      title: "You don't share — frustrations or success",
      description:
        "You believe if you express frustration, you'll be labeled petty. If you share a success, you're arrogant. So, no matter what happens, you keep it to yourself.",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Strengthens Relationships",
      description:
        "Being open and honest can deepen your connections with others, fostering trust and intimacy",
    },
    {
      icon: TrendingUp,
      title: "Promotes Personal Growth",
      description:
        "Taking emotional risks can help you learn more about yourself and grow as a person",
    },
    {
      icon: Lightbulb,
      title: "Enhances Self-Awareness",
      description:
        "Vulnerability encourages you to reflect on your emotions and experiences, leading to greater self-understanding",
    },
    {
      icon: Shield,
      title: "Reduces Anxiety",
      description:
        "Contrary to what you might think, acknowledging and sharing your emotions can decrease anxiety and stress",
    },
    {
      icon: Users,
      title: "Builds Empathy",
      description:
        "When you show your true self, it encourages others to do the same, creating a more empathetic and understanding environment",
    },
    {
      icon: CheckCircle,
      title: "Affirms Self-Worth",
      description:
        "Embracing vulnerability can reinforce the belief that you are enough just as you are",
    },
  ];

  const examples = [
    "Admitting Mistakes: Owning up to your errors and taking responsibility for them",
    "Sharing Personal Feelings: Opening up about your emotions, such as fears, hopes, or regrets",
    "Asking for Help: Reaching out when you need assistance or support",
    "Expressing Needs: Clearly communicating your needs and desires in relationships",
    "Taking Risks: Trying something new or stepping out of your comfort zone, even if there's a chance of failure",
    "Apologizing: Sincerely saying sorry when you've hurt someone",
    "Showing Affection: Expressing love or appreciation, even if you're unsure how it will be received",
    "Discussing Past Hurts: Talking about experiences that have caused you pain or trauma",
    "Being Honest: Telling the truth, even when it's difficult or uncomfortable",
    "Accepting Feedback: Being open to constructive criticism",
  ];

  const protectionStrategies = [
    "Set Boundaries: Clearly define what you're comfortable sharing and with whom. It's okay to keep some things private.",
    "Choose Trustworthy People: Share your vulnerabilities with people who have proven to be trustworthy and supportive.",
    "Listen to Your Instincts: If something feels off, trust your gut. It's okay to pull back if you feel uncomfortable.",
    "Be Selective: Not everyone needs to know everything about you. Be selective about who you open up to.",
    "Build Confidence: The more confident you are in yourself, the less likely you are to be hurt by others' actions.",
    "Learn from Experience: If someone does take advantage of your vulnerability, use it as a learning experience to better protect yourself in the future.",
  ];

  return (
    <div className={styles.container}>
      <Header
        title="Women's Day 2025"
        subtitle="Embracing Vulnerability and Strength in Professional Growth"
        backgroundImage="/bannerImages/women.jpeg"
      />

      <div className="container">
        <div className={styles.content}>
          {/* Download Section */}
          <section className={styles.downloadSection}>
            <div className={styles.downloadCard}>
              <div className={styles.downloadHeader}>
                <div className={styles.downloadIcon}>
                  <FileText size={32} />
                </div>
                <div className={styles.downloadInfo}>
                  <h3>Women's Day 2025 Presentation</h3>
                  <p>
                    Download the complete presentation on embracing
                    vulnerability and professional growth
                  </p>
                </div>
              </div>
              <div className={styles.downloadMeta}>
                <div className={styles.downloadDetail}>
                  <Calendar size={16} />
                  <span>March 2025</span>
                </div>
                <div className={styles.downloadDetail}>
                  <FileText size={16} />
                  <span>PDF Format</span>
                </div>
              </div>
              <a
                href="/womens-day/womens-day-2025-presentation.pdf"
                download
                className={styles.downloadButton}
              >
                <Download size={20} />
                Download Presentation
              </a>
            </div>
          </section>

          {/* Introduction */}
          <section className={styles.introSection}>
            <div className={styles.introCard}>
              <div className={styles.introIcon}>
                <Heart size={48} />
              </div>
              <h2>Celebrating Women's Strength Through Vulnerability</h2>
              <p>
                This Women's Day 2025, we explore the powerful concept of
                vulnerability and how embracing it can lead to personal and
                professional growth. Understanding vulnerability is not about
                weakness—it's about courage, authenticity, and the strength to
                show up as your true self.
              </p>
            </div>
          </section>

          {/* Vulnerability Triggers */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <Shield className={styles.sectionIcon} size={32} />
              <h2 className={styles.sectionTitle}>
                When We Avoid Vulnerability
              </h2>
            </div>
            <p className={styles.sectionIntro}>
              Are you unable to make yourself vulnerable? Even when you decide
              you want to embrace more uncertainty, risk, or exposure in your
              life, there are certain triggers that may halt this process. And
              the result? Misery.
            </p>
            <div className={styles.triggersGrid}>
              {vulnerabilityTriggers.map((trigger, index) => (
                <div key={index} className={styles.triggerCard}>
                  <div className={styles.triggerNumber}>{index + 1}</div>
                  <h3>{trigger.title}</h3>
                  <p>{trigger.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <TrendingUp className={styles.sectionIcon} size={32} />
              <h2 className={styles.sectionTitle}>
                The Benefits of Embracing Vulnerability
              </h2>
            </div>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <benefit.icon size={32} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Examples */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <Lightbulb className={styles.sectionIcon} size={32} />
              <h2 className={styles.sectionTitle}>Examples of Vulnerability</h2>
            </div>
            <div className={styles.examplesGrid}>
              {examples.map((example, index) => (
                <div key={index} className={styles.exampleCard}>
                  <CheckCircle className={styles.checkIcon} size={20} />
                  <p>{example}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Physical Manifestations */}
          <section className={styles.section}>
            <div className={styles.physicalCard}>
              <div className={styles.physicalHeader}>
                <Heart className={styles.physicalIcon} size={32} />
                <h2>Physical Reactions to Vulnerability</h2>
              </div>
              <p>
                Sometimes, vulnerability can manifest itself in your body's
                physical reactions. You may feel your muscles tense or that pit
                drop in your stomach. You may feel your breath quicken when you
                openly share your thoughts, emotions, and needs. You may feel
                your nervous system freeze, you may feel like you're unable to
                speak. You retreat.
              </p>
              <p className={styles.emphasis}>
                And in some instances, it may feel like you're losing a part of
                yourself.
              </p>
              <p>
                Being vulnerable is scary. After all, it has the power to change
                your life. To unpack vulnerability, you have to step into
                uncertainty and examine how it shows up in your relationships.
              </p>
            </div>
          </section>

          {/* Protection Strategies */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <Shield className={styles.sectionIcon} size={32} />
              <h2 className={styles.sectionTitle}>
                Protecting Yourself While Being Vulnerable
              </h2>
            </div>
            <p className={styles.sectionIntro}>
              It's understandable to worry about someone taking advantage of
              your vulnerability. Here are some ways to protect yourself while
              still being open:
            </p>
            <div className={styles.protectionGrid}>
              {protectionStrategies.map((strategy, index) => (
                <div key={index} className={styles.protectionCard}>
                  <Shield className={styles.protectionIcon} size={24} />
                  <p>{strategy}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaIcon}>
                <Users size={48} />
              </div>
              <h2>Transform Fear into Belonging</h2>
              <p>
                What if you could harness the power of vulnerability to ask for
                what you need or express your emotions without fear of
                rejection? Small actions — like sharing your feelings or
                celebrating your own achievements — may seem more daunting than
                it appears because of emotional vulnerability.
              </p>
              <p>
                While your gut instinct may be to avoid it at all costs, it's
                possible to build a quality, life-changing relationship with
                vulnerability. In the end, it could transform fear into
                belonging.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
