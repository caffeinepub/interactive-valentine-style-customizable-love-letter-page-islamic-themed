import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function ReduceMotionToggle() {
  const { isReducedMotion, setReducedMotion } = useReducedMotion();

  return (
    <div className="flex items-center gap-2 bg-card/80 backdrop-blur-lg border border-border rounded-full px-4 py-2 shadow-lg">
      <Switch
        id="reduce-motion"
        checked={isReducedMotion}
        onCheckedChange={setReducedMotion}
      />
      <Label htmlFor="reduce-motion" className="text-sm cursor-pointer">
        Reduce motion
      </Label>
    </div>
  );
}
