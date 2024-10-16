import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lagarto.app',
  appName: 'lagarto',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '1062986349881-usv1eonffh5kaepqpm5rding1g0sgpfa.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
