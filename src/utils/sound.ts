// Web Audio API procedural sound engine for cinematic micro-interactions
// No external assets required, zero latency, customizable frequency and envelopes

class SoundEngine {
  private ctx: AudioContext | null = null;
  private enabled: boolean = false;

  constructor() {
    // AudioContext will be initialized on first user gesture
  }

  public init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setEnabled(val: boolean) {
    this.enabled = val;
    if (val) {
      this.init();
      this.playChime();
    }
  }

  public isEnabled() {
    return this.enabled;
  }

  public playHover() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, this.ctx.currentTime + 0.04);
      
      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.045);
    } catch {
      // AudioContext error handling
    }
  }

  public playClick() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.07);
      
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.07);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.075);
    } catch {
      // AudioContext error handling
    }
  }

  public playWhoosh() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(560, this.ctx.currentTime + 0.12);
      
      gain.gain.setValueAtTime(0.025, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.12);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.13);
    } catch {
      // AudioContext error handling
    }
  }

  public playChime() {
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime + idx * 0.05);
        
        gain.gain.setValueAtTime(0.03, this.ctx!.currentTime + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx!.currentTime + idx * 0.05 + 0.25);
        
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        
        osc.start(this.ctx!.currentTime + idx * 0.05);
        osc.stop(this.ctx!.currentTime + idx * 0.05 + 0.26);
      });
    } catch {
      // AudioContext error handling
    }
  }

  public playSuccess() {
    if (!this.enabled || !this.ctx) return;
    try {
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime + idx * 0.06);
        
        gain.gain.setValueAtTime(0.035, this.ctx!.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx!.currentTime + idx * 0.06 + 0.35);
        
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        
        osc.start(this.ctx!.currentTime + idx * 0.06);
        osc.stop(this.ctx!.currentTime + idx * 0.06 + 0.36);
      });
    } catch {
      // AudioContext error handling
    }
  }
}

export const sound = new SoundEngine();
