"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardDashboard from '@/components/sections/hero/HeroBillboardDashboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, Palette, Layout, Brush, Zap, Star, Lightbulb, Users, Feather } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="mediumSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="subtle-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Beli"
          navItems={[
            { name: "Work", id: "work" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Transform Your Brand Into Market Leader"
          description="We craft beautiful, purposeful digital experiences that transform brands and engage audiences. Beli specializes in strategic design that drives results."
          tag="Design Agency"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Start a Project", href: "contact" },
            { text: "View Our Work", href: "work" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          dashboard={{
            title: "Design Excellence",            logoIcon: Palette,
            imageSrc: "http://img.b2bpic.net/free-photo/public-examination-preparation-concept_23-2149369872.jpg",            imageAlt: "Design Dashboard",            buttons: [
              { text: "Explore", href: "#" },
              { text: "Learn More", href: "#" }
            ],
            sidebarItems: [
              { icon: Layout, active: true },
              { icon: Brush },
              { icon: Zap }
            ],
            stats: [
              {
                title: "Projects Completed",                values: [120, 145, 168],
                description: "Successful deliveries"
              },
              {
                title: "Happy Clients",                values: [45, 62, 78],
                description: "Client satisfaction rate"
              },
              {
                title: "Team Members",                values: [12, 15, 18],
                description: "Creative professionals"
              }
            ],
            chartTitle: "Growth Trajectory",            chartData: [
              { value: 40 },
              { value: 60 },
              { value: 75 },
              { value: 85 },
              { value: 95 }
            ],
            listTitle: "Recent Projects",            listItems: [
              { icon: Star, title: "Brand Identity Design", status: "Completed" },
              { icon: Zap, title: "Web Experience Design", status: "Completed" },
              { icon: Palette, title: "UI System Design", status: "In Progress" }
            ],
            searchPlaceholder: "Search projects..."
          }}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Beli"
          description={[
            "Beli is a full-service design agency with 200+ brands transformed across diverse sectors and 10+ years of industry experience, maintaining 98% client satisfaction. We are dedicated to creating transformative digital experiences that go beyond aesthetics—solving problems, telling stories, and building meaningful connections between brands and their audiences.",            "With a team of experienced designers, strategists, and creatives, we partner with forward-thinking companies to bring their vision to life. Our approach combines research-driven insights with innovative thinking to deliver solutions that are both beautiful and effective.",            "From concept to launch, we're committed to excellence at every stage of the creative process, leveraging our proven track record to establish ourselves as trusted partners in strategic design innovation."
          ]}
          buttons={[
            { text: "Get in Touch", href: "contact" }
          ]}
          useInvertedBackground={false}
          showBorder={true}
        />
      </div>
      
      <div id="services" data-section="services">
        <FeatureCardSix
          title="Our Process"
          description="We follow a structured, collaborative approach to design that ensures every project meets the highest standards of creativity and functionality."
          tag="How We Work"
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              id: 1,
              title: "Discovery & Strategy",              description: "We begin by understanding your brand, goals, and target audience. Through research and workshops, we develop a strategic foundation for the design solution.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-s-hands-business-papers_176420-5033.jpg",              imageAlt: "Discovery and strategy phase"
            },
            {
              id: 2,
              title: "Design & Development",              description: "Our team creates compelling visual designs and prototypes that bring your vision to life. We iterate based on feedback to refine every detail.",              imageSrc: "http://img.b2bpic.net/free-photo/young-creative-people-with-laptop-sketches-discussing-new-project-together-group-guys-gals-working-modern-cozy-office_574295-5904.jpg",              imageAlt: "Design and development phase"
            },
            {
              id: 3,
              title: "Launch & Optimize",              description: "We deploy your solution and provide ongoing support to ensure success. Performance monitoring and optimization keep your design performing at its best.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-holding-color-palette_23-2149345284.jpg",              imageAlt: "Launch and optimization phase"
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="We've had the privilege of working with innovative companies across diverse industries. These partnerships drive our commitment to excellence."
          tag="Our Clients"
          tagIcon={Users}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={["TechFlow", "Innovate Labs", "CloudSync", "DesignPro", "Creative Studios", "Brand Forge", "Digital Hub"]}
          speed={40}
          showCard={true}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardFifteen
          testimonial="Working with Beli transformed our brand presence. Their strategic approach to design and attention to detail exceeded our expectations. We've seen significant improvements in engagement and conversion."
          rating={5}
          author="Sarah Chen, CEO at TechFlow"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg", alt: "Client testimonial 1" },
            { src: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg", alt: "Client testimonial 2" },
            { src: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg", alt: "Client testimonial 3" },
            { src: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg", alt: "Client testimonial 4" },
            { src: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg", alt: "Client testimonial 5" },
            { src: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg", alt: "Client testimonial 6" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>
      
      <div id="blog" data-section="blog">
        <BlogCardThree
          title="Design Insights"
          description="Explore our latest thoughts on design trends, creative strategies, and industry insights."
          tag="Blog"
          tagIcon={Feather}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          blogs={[
            {
              id: "1",              category: "Design Trends",              title: "The Future of Minimalist Design",              excerpt: "Exploring how simplicity and intentionality shape modern digital experiences and user engagement.",              imageSrc: "http://img.b2bpic.net/free-photo/inspired-youth_53876-176745.jpg?_wi=1",              imageAlt: "Future of minimalist design",              authorName: "Alex Rodriguez",              authorAvatar: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg",              date: "Jan 15, 2025"
            },
            {
              id: "2",              category: "Brand Strategy",              title: "Building Authentic Brand Experiences",              excerpt: "How strategic design thinking creates meaningful connections between brands and their audiences.",              imageSrc: "http://img.b2bpic.net/free-photo/working-office_1150-121.jpg",              imageAlt: "Brand strategy and storytelling",              authorName: "Emma Thompson",              authorAvatar: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg",              date: "Jan 10, 2025"
            },
            {
              id: "3",              category: "Creative Process",              title: "Unlocking Creative Potential Through Collaboration",              excerpt: "Insights from our team on fostering innovation and excellence in collaborative design projects.",              imageSrc: "http://img.b2bpic.net/free-photo/inspired-youth_53876-176745.jpg?_wi=2",              imageAlt: "Creative collaboration and innovation",              authorName: "Michael Chen",              authorAvatar: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg",              date: "Jan 5, 2025"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to create something extraordinary? Let's collaborate and bring your vision to life."
          animationType="background-highlight"
          buttons={[
            { text: "Start Your Project", href: "contact" },
            { text: "Schedule a Call", href: "contact" }
          ]}
          background={{ variant: "gradient-bars" }}
          useInvertedBackground={false}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "Brand Design", href: "#" },
                { label: "Web Design", href: "#" },
                { label: "UI/UX Design", href: "#" },
                { label: "Strategy", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "about" },
                { label: "Blog", href: "blog" },
                { label: "Work", href: "work" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Email", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Instagram", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Beli Design Agency. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}