const AboutSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Así puedo ayudarte.
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-8 leading-tight">
            Tu web profesional, 
            <br className="hidden sm:block" />
            <span className="text-primary my-[10px]">sin líos técnicos</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Consigue una web profesional, clara y funcional sin arruinarte por el camino.{" "}
            <strong className="text-foreground">De manera ágil y sin complicaciones.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Rápido</h3>
              <p className="text-muted-foreground">
                Tu web lista en días, no en meses. Para empezar a vivir por fin de tu trabajo.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Simple</h3>
              <p className="text-muted-foreground">
                Sin jerga técnica. Te lo explico todo claro para que puedas decidir.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Precio justo</h3>
              <p className="text-muted-foreground">Packs cerrados. Sabes lo que pagas desde el principio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
