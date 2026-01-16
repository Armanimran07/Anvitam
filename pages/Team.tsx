import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const Team: React.FC = () => {
  const archana = TEAM_MEMBERS.find(m => m.name.includes('Archana'));

  return (
    <div className="py-12 bg-white min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Left Col: Image & Contact */}
        <div className="md:col-span-5 sticky top-32 self-start">
          <ScrollReveal>
            <div className="relative overflow-hidden aspect-[3/4] mb-8 bg-anvitam-stone">
              <img
                src={archana?.image || "/founder.jpg"}
                alt="Archana Gavas"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"; // Fallback
                }}
              />
            </div>
            <h2 className="text-2xl font-serif text-anvitam-charcoal">Archana Gavas</h2>
            <p className="text-sm uppercase tracking-widest text-anvitam-green mb-6">Principal Architect, Founder</p>

            <div className="text-sm text-gray-500 font-mono space-y-2">
              <p>anvitamarchitects@gmail.com</p>
              <a href="https://www.linkedin.com/in/archana-gavas/" className="underline hover:text-anvitam-blue">LinkedIn Profile</a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Col: Narrative */}
        <div className="md:col-span-7">
          <div className="prose prose-lg prose-headings:font-serif prose-p:font-serif text-anvitam-charcoal/80">
            <ScrollReveal delay={100}>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-anvitam-blue mb-8">Meet Us</h3>

              <p className="text-2xl font-serif italic text-black mb-12">
                "I didn’t start with a firm. No team. No funding. No roadmap. Just a quiet belief."
              </p>
            </ScrollReveal>

            <div className="space-y-8 leading-relaxed">
              <ScrollReveal delay={200}>
                <p>
                  As a freelance architect, I wore every hat. From concept to execution, budgeting to supervision. What kept me going was the hope that every space I touched might help someone feel seen, safe, or inspired.
                </p>

                <p>
                  That belief shaped <strong>Anvitam</strong> — my independent architecture studio, built from the ground up. I’ve led 10+ projects spanning residential architecture, commercial space design, community-driven architecture, and landscape planning. Each one rooted in context, emotion, and honest simplicity.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p>
                  But creativity, to me, doesn’t end at walls and plans. It belongs in classrooms, offices, and playgrounds too. That’s why I founded <em>Nest N Nurture</em> — a space for creative workshops that bring imagination back into design. We invite people — especially children — to transform their own spaces using color, stories, and collaboration. It’s not just a makeover. It’s ownership.
                </p>

                <div className="border-l-2 border-anvitam-green pl-6 py-2 my-8 italic text-gray-600 bg-anvitam-cream/50">
                  "My process is Raw. Intentional. Rooted in permaculture, nature-based systems, and user-centered thinking."
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p>
                  Whether it’s a garden, a classroom, or a living room — I design for how people feel, grow, and belong in a space.
                </p>

                <p>
                  Yes, the road’s been rough. Being a solo woman founder in architecture comes with its weight. But I’ve learned to trust the quiet power of consistency, intuition, and care. I don’t follow trends. I follow stories. People. Place. Possibility.
                </p>

                <p className="font-bold text-black mt-8">
                  If you believe design can be deeper — let’s build something meaningful together.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;