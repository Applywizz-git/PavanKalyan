import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'surface-1': 'hsl(var(--surface-1))',
				'surface-2': 'hsl(var(--surface-2))',
				'subtle': 'hsl(var(--subtle))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'bounce-in': {
					'0%': { transform: 'scale(0.3)', opacity: '0' },
					'50%': { transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--accent) / 0.3)' },
					'50%': { boxShadow: '0 0 30px hsl(var(--accent) / 0.6)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 5px hsl(var(--accent) / 0.2)' },
					'50%': { boxShadow: '0 0 25px hsl(var(--accent) / 0.5), 0 0 35px hsl(var(--accent) / 0.3)' }
				},
				'morph-3d': {
					'0%, 100%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)' },
					'25%': { transform: 'perspective(1000px) rotateX(10deg) rotateY(15deg) scale(1.05)' },
					'50%': { transform: 'perspective(1000px) rotateX(-5deg) rotateY(-10deg) scale(1.1)' },
					'75%': { transform: 'perspective(1000px) rotateX(15deg) rotateY(5deg) scale(1.05)' }
				},
				'card-hover': {
					'0%': { transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)' },
					'100%': { transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'float-3d': {
					'0%, 100%': { transform: 'translateY(0) rotateX(0deg) rotateY(0deg)' },
					'25%': { transform: 'translateY(-10px) rotateX(5deg) rotateY(5deg)' },
					'50%': { transform: 'translateY(-15px) rotateX(0deg) rotateY(10deg)' },
					'75%': { transform: 'translateY(-10px) rotateX(-5deg) rotateY(5deg)' }
				},
				'rotate-3d': {
					'0%': { transform: 'perspective(1000px) rotateY(0deg)' },
					'100%': { transform: 'perspective(1000px) rotateY(360deg)' }
				},
				'flip-3d': {
					'0%': { transform: 'rotateY(0)' },
					'100%': { transform: 'rotateY(180deg)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'skill-appear': {
					'0%': { opacity: '0', transform: 'scale(0.8) rotateY(-30deg)' },
					'100%': { opacity: '1', transform: 'scale(1) rotateY(0deg)' }
				},
				'skill-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--accent) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--accent) / 0.6), 0 0 60px hsl(var(--accent) / 0.4)' }
				},
				'particle-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-30px) rotate(120deg)' },
					'66%': { transform: 'translateY(20px) rotate(240deg)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'typewriter': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { borderColor: 'transparent' },
					'51%, 100%': { borderColor: 'hsl(var(--accent))' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'bounce-in': 'bounce-in 0.6s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'float-3d': 'float-3d 6s ease-in-out infinite',
				'rotate-3d': 'rotate-3d 20s linear infinite',
				'flip-3d': 'flip-3d 0.6s ease-in-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'skill-appear': 'skill-appear 0.6s ease-out',
				'skill-glow': 'skill-glow 3s ease-in-out infinite',
				'particle-float': 'particle-float 4s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'typewriter': 'typewriter 3s steps(40) 1s both',
				'blink': 'blink 1s step-end infinite',
				'morph-3d': 'morph-3d 8s ease-in-out infinite',
				'card-hover': 'card-hover 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
