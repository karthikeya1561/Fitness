import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
// import { IconSymbol } from '@/components/ui/icon-symbol'; // Assuming we can use this or similar

export default function DashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView className="flex-1 px-4">
        {/* Header */}
        <View className="flex-row justify-between items-center py-4">
          <View>
            <Text className="text-slate-900 dark:text-white text-2xl font-bold">Hello, User!</Text>
            <Text className="text-slate-500 dark:text-[#92c9a4] text-sm">Ready to crush it today?</Text>
            <Link href="/login" asChild>
              <TouchableOpacity>
                <Text className="text-primary font-bold text-sm mt-1">Log In / Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <View className="size-10 rounded-full bg-primary items-center justify-center overflow-hidden">
            {/* Avatar Placeholder */}
            <Image
              source="https://lh3.googleusercontent.com/aida-public/AB6AXuARpNT0cRlD9wK_07832xH3NQO5-c89ATLUXCRwPeHAX2s-sEgsrueeiqZQOW_ufnfsAqgyPDuRwraFS6fSNg5RIrU5YUfY-FdduaTENwgvB2S1blyOBIEgHzbY971iwQkVxBodw7Z4STrgMz2CUU0YYRUvxo-UoubhTypM5pBJrtXGGosSlajuYVmIiO16SAma6ZuViytHnCaEOwYOZg7EFOOjF9znWnK_Suazj8b6fOfuxA5aKzL0VPtPRRCgoEXyy0QSs687nYU"
              style={{ width: 40, height: 40 }}
              contentFit="cover"
            />
          </View>
        </View>

        {/* Highlight / Hero */}
        <View className="bg-slate-900 dark:bg-[#193322] rounded-2xl p-6 mb-6 shadow-lg overflow-hidden relative">
          <View className="z-10">
            <Text className="text-white text-xl font-bold mb-2">Start Empty Workout</Text>
            <Text className="text-slate-300 dark:text-[#92c9a4] text-sm mb-4">Log as you go without a routine</Text>
            <TouchableOpacity className="bg-primary px-6 py-3 rounded-lg self-start">
              <Text className="text-[#102216] font-bold">Start Now</Text>
            </TouchableOpacity>
          </View>
          {/* Abstract Background Decoration */}
          <View className="absolute -right-4 -bottom-4 size-32 bg-primary/10 rounded-full" />
        </View>

        {/* Quick Stats */}
        <View className="flex-row gap-4 mb-6">
          <View className="flex-1 bg-white dark:bg-[#1a2e21] p-4 rounded-xl border border-slate-200 dark:border-[#23482f]">
            <Text className="text-slate-500 dark:text-[#92c9a4] text-xs font-bold uppercase mb-1">Streak</Text>
            <Text className="text-slate-900 dark:text-white text-2xl font-black">12 <Text className="text-sm font-normal text-slate-500">days</Text></Text>
          </View>
          <View className="flex-1 bg-white dark:bg-[#1a2e21] p-4 rounded-xl border border-slate-200 dark:border-[#23482f]">
            <Text className="text-slate-500 dark:text-[#92c9a4] text-xs font-bold uppercase mb-1">Workouts</Text>
            <Text className="text-slate-900 dark:text-white text-2xl font-black">4 <Text className="text-sm font-normal text-slate-500">this wk</Text></Text>
          </View>
        </View>

        {/* Recent Routines */}
        <Text className="text-slate-900 dark:text-white text-lg font-bold mb-4">Jump Back In</Text>
        <View className="gap-4 mb-8">
          {/* Card 1 */}
          <TouchableOpacity className="bg-white dark:bg-[#1a2e21] p-4 rounded-xl border border-slate-200 dark:border-[#23482f] flex-row items-center gap-4">
            <View className="size-16 bg-slate-100 dark:bg-[#112217] rounded-lg items-center justify-center">
              <Text className="text-2xl">💪</Text>
            </View>
            <View className="flex-1">
              <Text className="text-slate-900 dark:text-white font-bold text-base">Upper Body Power</Text>
              <Text className="text-slate-500 dark:text-[#92c9a4] text-xs">Chest • Shoulders • Triceps</Text>
            </View>
            <View className="bg-slate-100 dark:bg-[#112217] p-2 rounded-full">
              {/* Plus Icon Placeholder */}
              <Text className="text-primary font-bold">+</Text>
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity className="bg-white dark:bg-[#1a2e21] p-4 rounded-xl border border-slate-200 dark:border-[#23482f] flex-row items-center gap-4">
            <View className="size-16 bg-slate-100 dark:bg-[#112217] rounded-lg items-center justify-center">
              <Text className="text-2xl">🦵</Text>
            </View>
            <View className="flex-1">
              <Text className="text-slate-900 dark:text-white font-bold text-base">Lower Body Focus</Text>
              <Text className="text-slate-500 dark:text-[#92c9a4] text-xs">Squats • Lunges • Calves</Text>
            </View>
            <View className="bg-slate-100 dark:bg-[#112217] p-2 rounded-full">
              <Text className="text-primary font-bold">+</Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
