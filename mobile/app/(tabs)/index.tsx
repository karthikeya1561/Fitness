import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');

const routines = [
  {
    title: 'Upper Body Power',
    muscles: 'Chest • Shoulders • Triceps',
    duration: '65 min',
    exercises: 8,
    tag: 'Hypertrophy',
    tagColor: 'bg-primary/20',
    tagText: 'text-primary',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5FbgfBIGDCBO1hAK1DOM8K3qfGc8uqyeKoegkFYYdI4DLDs0OgG1sS0ALDO8gobNIu8T-zliWUlMPDDu4N-77CqSDU6ybtR5bVjm8Ouk6hO7Jd0GGy9q64FhJT961yJW0cWbnQjRVaBx_J8ijRw4Ng8Ua4U8Kr488hzEqabQI1_B9Nfqf-eeTICtj4gTvJz-3UbotO16yIFm6jATifU0oi5BEGCfXHAK4cYsULQith_n-jG7z5895zdCv_Nk0fvjgHe5T4B1sbfw',
    primary: true,
  },
  {
    title: 'Lower Body Focus',
    muscles: 'Quads • Hamstrings • Glutes',
    duration: '55 min',
    exercises: 6,
    tag: 'Strength',
    tagColor: 'bg-blue-500/20',
    tagText: 'text-blue-400',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkP_q73w8hBJxcKKwXz1_4KU_Ni-QthfmI5IflucA_HhXBVIxEIjPOGgEFJ1UMbJGJZDJnRtKo2Hgk8krBrrdxm1zi1XLedBIdgdzyGFtRcltCskNDQp289RNqVUzarfHfLRzilXkKiIq3SC9BZuaw9p-Y-uykh7YQm2JA_3aLrwpxPi1he_9cPYxBtiqYsWYM0hvEZ4Brbn0GAhDpcwfjWzgG8NTsm1vtSjSnTPVdTJYHFzkkyX5irZI_gSE6UxrAfS8lAwnoUFI',
    primary: false,
  },
];

const streakDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const activeDays = [0, 1, 2, 3];

export default function DashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark" edges={['top']}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ── */}
        <View className="flex-row justify-between items-center px-5 pt-4 pb-2">
          <View>
            <Text className="text-slate-500 dark:text-[#92c9a4] text-sm font-medium">Good morning 🌤</Text>
            <Text className="text-slate-900 dark:text-white text-2xl font-bold mt-0.5">Hello, User!</Text>
          </View>
          <View className="flex-row items-center gap-3">
            <TouchableOpacity className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#1a2e21] items-center justify-center">
              <Text className="text-lg">🔔</Text>
            </TouchableOpacity>
            <View className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
              <Image
                source="https://lh3.googleusercontent.com/aida-public/AB6AXuARpNT0cRlD9wK_07832xH3NQO5-c89ATLUXCRwPeHAX2s-sEgsrueeiqZQOW_ufnfsAqgyPDuRwraFS6fSNg5RIrU5YUfY-FdduaTENwgvB2S1blyOBIEgHzbY971iwQkVxBodw7Z4STrgMz2CUU0YYRUvxo-UoubhTypM5pBJrtXGGosSlajuYVmIiO16SAma6ZuViytHnCaEOwYOZg7EFOOjF9znWnK_Suazj8b6fOfuxA5aKzL0VPtPRRCgoEXyy0QSs687nYU"
                style={{ width: 40, height: 40 }}
                contentFit="cover"
              />
            </View>
          </View>
        </View>

        {/* ── Streak Bar ── */}
        <View className="mx-5 mt-3 bg-white dark:bg-[#1a2e21] rounded-2xl border border-slate-100 dark:border-[#23482f] px-4 py-3 flex-row justify-between items-center">
          <View className="flex-row items-center gap-2">
            <Text className="text-xl">🔥</Text>
            <View>
              <Text className="text-slate-900 dark:text-white font-bold text-sm">12-Day Streak</Text>
              <Text className="text-slate-400 dark:text-[#92c9a4] text-xs">Keep it up!</Text>
            </View>
          </View>
          <View className="flex-row gap-1.5">
            {streakDays.map((day, i) => (
              <View
                key={i}
                className={`w-7 h-7 rounded-full items-center justify-center ${activeDays.includes(i) ? 'bg-primary' : 'bg-slate-100 dark:bg-[#112217]'}`}
              >
                <Text className={`text-[10px] font-bold ${activeDays.includes(i) ? 'text-[#102216]' : 'text-slate-400'}`}>
                  {day}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── Hero: Start Workout ── */}
        <View className="mx-5 mt-4 bg-slate-900 dark:bg-[#162c1e] rounded-2xl overflow-hidden">
          <Image
            source="https://lh3.googleusercontent.com/aida-public/AB6AXuAFKb48dyS0Gg_gmoZ5Im6KgtYNYu4sTaBSi0SFr9lE2xnGUaUbU7MYiV6dBid43eVoPxZCAN-kYDzmK8XgCxhCBLZv1y62g58riyuIvmyhVfXEvFEspdTktCCw1hbofHLnR975Gozw2QNsq9l8P_L-BtjTpqZNqZ770XP7EojQEUAgMYCirxkboiAm0V2sVstLhcz3EruS4yWFfdc1jL5reRXTQr2-Hs2vk4SWTKuYyw50r_5cDpBQAM2PcYQygqtf6whM1TEPWCo"
            style={{ width: '100%', height: 140, opacity: 0.4 }}
            contentFit="cover"
          />
          <View className="absolute inset-0 p-5 justify-center">
            <Text className="text-white text-xl font-bold mb-1">Start Empty Workout</Text>
            <Text className="text-slate-300 text-sm mb-4">Log as you go without a routine</Text>
            <TouchableOpacity className="bg-primary px-6 py-3 rounded-xl self-start flex-row items-center gap-2">
              <Text className="text-2xl leading-none">▶</Text>
              <Text className="text-[#102216] font-bold text-sm">Start Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Quick Stats ── */}
        <View className="flex-row gap-3 px-5 mt-4">
          {[
            { label: 'Streak', value: '12', unit: 'days', icon: '🔥' },
            { label: 'This Week', value: '4', unit: 'workouts', icon: '💪' },
            { label: 'Volume', value: '45k', unit: 'kg', icon: '⚡' },
          ].map((stat, i) => (
            <View key={i} className="flex-1 bg-white dark:bg-[#1a2e21] p-3 rounded-xl border border-slate-100 dark:border-[#23482f] items-center">
              <Text className="text-xl mb-1">{stat.icon}</Text>
              <Text className="text-slate-900 dark:text-white text-lg font-black">{stat.value}</Text>
              <Text className="text-slate-400 dark:text-[#92c9a4] text-[10px] font-medium uppercase">{stat.unit}</Text>
            </View>
          ))}
        </View>

        {/* ── Routines ── */}
        <View className="px-5 mt-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-slate-900 dark:text-white text-lg font-bold">Jump Back In</Text>
            <TouchableOpacity>
              <Text className="text-primary text-sm font-bold">See all →</Text>
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            {routines.map((r, i) => (
              <TouchableOpacity
                key={i}
                className="bg-white dark:bg-[#1a2e21] rounded-2xl border border-slate-100 dark:border-[#23482f] overflow-hidden flex-row"
                activeOpacity={0.8}
              >
                {/* Image */}
                <Image
                  source={r.img}
                  style={{ width: 90, height: 90 }}
                  contentFit="cover"
                />
                {/* Info */}
                <View className="flex-1 px-4 py-3 justify-between">
                  <View>
                    <View className={`self-start px-2 py-0.5 rounded-full mb-1 ${r.tagColor}`}>
                      <Text className={`text-[10px] font-bold uppercase ${r.tagText}`}>{r.tag}</Text>
                    </View>
                    <Text className="text-slate-900 dark:text-white font-bold text-sm">{r.title}</Text>
                    <Text className="text-slate-500 dark:text-[#92c9a4] text-xs mt-0.5">{r.muscles}</Text>
                  </View>
                  <View className="flex-row items-center gap-3">
                    <Text className="text-slate-400 text-xs">⏱ {r.duration}</Text>
                    <Text className="text-slate-400 text-xs">📋 {r.exercises} ex</Text>
                  </View>
                </View>
                {/* Start Button */}
                <View className={`w-12 items-center justify-center ${r.primary ? 'bg-primary' : 'bg-slate-100 dark:bg-[#23482f]'}`}>
                  <Text className={`text-lg font-bold ${r.primary ? 'text-[#102216]' : 'text-slate-500'}`}>▶</Text>
                </View>
              </TouchableOpacity>
            ))}

            {/* Create New */}
            <Link href="/routines/create" asChild>
              <TouchableOpacity className="border-2 border-dashed border-slate-200 dark:border-[#23482f] rounded-2xl p-5 flex-row items-center justify-center gap-3" activeOpacity={0.7}>
                <View className="w-9 h-9 bg-slate-100 dark:bg-[#112217] rounded-full items-center justify-center">
                  <Text className="text-primary text-xl leading-none font-bold">+</Text>
                </View>
                <Text className="text-slate-600 dark:text-[#92c9a4] font-semibold text-sm">Create New Routine</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
