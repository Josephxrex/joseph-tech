import { cn } from "@/lib/utils";

export const TechCard = ({ icon: Icon, name, className }: { icon: any; name: string; className?: string }) => (
    <div
        className={cn(
            "group flex items-center gap-3 p-3 rounded-xl bg-black/20 backdrop-blur-md border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]",
            "hover:bg-black/30 hover:border-white/10 transition-all duration-300",
            className,
        )}
    >
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-black/30 text-primary">
            <Icon className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-medium text-white/90 group-hover:text-white">{name}</span>

    </div>
)