"use client"
import { Github, Linkedin, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"
import { TechCard } from "./TechCard"

export default function CustomSidebar() {
  return (
    <div className="h-full flex flex-col">
      <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-xl border border-white/5">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative p-6">
          <div className="absolute top-0 left-1/2 h-[1px] w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/60 via-purple-500/60 to-primary/60 blur-sm"></div>
              <img
                src="https://josephxrex-fl.s3.us-east-1.amazonaws.com/me.jpeg"
                alt="Author"
                className="relative w-20 h-20 rounded-full object-cover border-2 border-black/50"
              />
            </div>

            <h2 className="text-xl font-bold text-white mb-1">Joseph Camargo</h2>
            <p className="text-xs text-white/60 mb-4">Backend Developer</p>

            <div className="w-full p-3 mb-4 bg-black/40 rounded-lg border border-white/5 text-xs text-white/80 font-mono leading-relaxed text-left">
              <span className="text-white">$</span> Backend developer with a strong focus on building scalable and
              efficient APIs, databases, and cloud solutions.
            </div>

            <div className="flex gap-3">
              <Link href="https://github.com" target="_blank" className="group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 border border-white/5 text-white/70 hover:text-primary hover:border-primary/30 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all duration-300">
                  <Github className="w-5 h-5" />
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 border border-white/5 text-white/70 hover:text-primary hover:border-primary/30 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
          <h3 className="mx-3 text-xs font-bold uppercase tracking-widest text-white/60">Tech Stack</h3>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
        </div>

        <div className="space-y-3">
          <TechCard
            icon={({ className }: { className?: string }) => (
              <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
              </svg>
            )}
            name="Python & FastAPI"
          />

          <TechCard
            icon={({ className }: { className?: string }) => (
              <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.374 17.583c-1.665 0-3.042-1.381-3.042-3.042 0-1.666 1.377-3.042 3.042-3.042 1.667 0 3.041 1.376 3.041 3.042 0 1.661-1.374 3.042-3.041 3.042zm9.874-.084c-1.328 0-2.399-1.066-2.399-2.396 0-1.32 1.071-2.396 2.399-2.396 1.33 0 2.4 1.076 2.4 2.396 0 1.33-1.07 2.396-2.4 2.396zm-10.025-8.083c-1.125-.077-2.537.106-2.888 1.052-.147.39-.257.8-.257 1.19v1.642h5.773v-1.642c0-.39-.044-.8-.192-1.19-.35-.946-1.13-1.052-2.436-1.052zm10.174 0c-1.306 0-2.087.106-2.438 1.052-.147.39-.191.8-.191 1.19v1.642h5.721v-1.642c0-.39-.043-.8-.19-1.19-.35-.946-1.76-1.129-2.902-1.052z" />
              </svg>
            )}
            name="MongoDB & PostgreSQL"
          />

          <TechCard
            icon={({ className }: { className?: string }) => (
              <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.4-.287-.774-.415l-1.109-.343c-.55-.167-.967-.359-1.246-.583-.287-.223-.43-.519-.43-.887 0-.254.055-.479.175-.67.12-.191.286-.359.502-.487.215-.127.47-.231.75-.295.28-.064.582-.096.902-.096.143 0 .287.008.43.024.151.016.294.04.43.072.127.032.247.064.35.104.104.04.19.071.256.111a.98.98 0 0 1 .239.214.507.507 0 0 1 .072.263v.375c0 .167-.064.255-.184.255-.063 0-.16-.04-.303-.111a2.731 2.731 0 0 0-1.061-.223c-.455 0-.815.071-1.061.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.085.343c.543.167.934.367 1.173.607.239.24.359.535.359.886 0 .271-.055.511-.159.718-.104.208-.255.383-.43.535-.18.153-.390.274-.646.359-.255.08-.55.127-.877.127zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.335-.43-2.22-.207-3.073-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.694-2.994z" />
              </svg>
            )}
            name="AWS & Serverless"
          />

          <TechCard
            icon={({ className }: { className?: string }) => (
              <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.924 1.617a.5.5 0 0 0-.217-.33.5.5 0 0 0-.412-.05l-23 9a.5.5 0 0 0-.046.909l7.153 4.061 4.023 7.5a.5.5 0 0 0 .844.033l12-20a.5.5 0 0 0 .046-.562zM11.5 17.691l-3.282-6.117 5.241-5.333-5.65 4.33-4.827-2.739L21.5 2.547z" />
              </svg>
            )}
            name="CI/CD & DevOps"
          />
        </div>
      </div>
    </div>
  )
}

