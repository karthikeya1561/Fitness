import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

const routines = [
    {
        title: 'Push Day A',
        subtitle: 'Chest, Shoulders, Triceps — heavy compounds',
        tag: 'Strength',
        duration: '65 min',
        exercises: 8,
        last: '2 days ago',
        primary: true,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5FbgfBIGDCBO1hAK1DOM8K3qfGc8uqyeKoegkFYYdI4DLDs0OgG1sS0ALDO8gobNIu8T-zliWUlMPDDu4N-77CqSDU6ybtR5bVjm8Ouk6hO7Jd0GGy9q64FhJT961yJW0cWbnQjRVaBx_J8ijRw4Ng8Ua4U8Kr488hzEqabQI1_B9Nfqf-eeTICtj4gTvJz-3UbotO16yIFm6jATifU0oi5BEGCfXHAK4cYsULQith_n-jG7z5895zdCv_Nk0fvjgHe5T4B1sbfw',
    },
    {
        title: 'Pull Day B',
        subtitle: 'Back and Biceps — vertical pull focus',
        tag: 'Hypertrophy',
        duration: '55 min',
        exercises: 7,
        last: '5 days ago',
        primary: false,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkP_q73w8hBJxcKKwXz1_4KU_Ni-QthfmI5IflucA_HhXBVIxEIjPOGgEFJ1UMbJGJZDJnRtKo2Hgk8krBrrdxm1zi1XLedBIdgdzyGFtRcltCskNDQp289RNqVUzarfHfLRzilXkKiIq3SC9BZuaw9p-Y-uykh7YQm2JA_3aLrwpxPi1he_9cPYxBtiqYsWYM0hvEZ4Brbn0GAhDpcwfjWzgG8NTsm1vtSjSnTPVdTJYHFzkkyX5irZI_gSE6UxrAfS8lAwnoUFI',
    },
];

const history = [
    { date: 'Feb 12', title: 'Leg Day — Hypertrophy', duration: '65 min', volume: '18,450 kg', prs: 8 },
    { date: 'Feb 10', title: 'Push Day A', duration: '50 min', volume: '12,300 kg', prs: 2 },
    { date: 'Feb 08', title: 'Pull Day B', duration: '55 min', volume: '14,100 kg', prs: 0 },
];

export default function WorkoutsScreen() {
    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark" edges={['top']}>
            <ScrollView
                className="flex-1"
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                {/* ── Header ── */}
                <View className="flex-row justify-between items-center px-5 pt-4 pb-4">
                    <View>
                        <Text className="text-slate-900 dark:text-white text-2xl font-bold">Workouts</Text>
                        <Text className="text-slate-500 dark:text-[#92c9a4] text-sm mt-0.5">Manage your routines</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center gap-1.5 bg-primary px-4 py-2.5 rounded-xl">
                        <Text className="text-[#102216] font-bold text-sm">+ New</Text>
                    </TouchableOpacity>
                </View>

                {/* ── My Routines ── */}
                <View className="px-5">
                    <Text className="text-slate-900 dark:text-white text-base font-bold mb-3">Quick Start</Text>
                    <View className="gap-3">
                        {routines.map((r, i) => (
                            <View
                                key={i}
                                className="bg-white dark:bg-[#1a2e21] rounded-2xl border border-slate-100 dark:border-[#23482f] overflow-hidden"
                            >
                                {/* Top image + tag */}
                                <View className="relative">
                                    <Image
                                        source={r.img}
                                        style={{ width: '100%', height: 110 }}
                                        contentFit="cover"
                                    />
                                    <View className="absolute inset-0 bg-black/30" />
                                    <View className="absolute top-3 left-3 bg-primary/90 px-2 py-0.5 rounded-full">
                                        <Text className="text-[#102216] text-[10px] font-bold uppercase">{r.tag}</Text>
                                    </View>
                                    <View className="absolute bottom-3 right-3 bg-black/50 px-2 py-0.5 rounded-full">
                                        <Text className="text-white text-[10px]">Last: {r.last}</Text>
                                    </View>
                                </View>
                                {/* Content */}
                                <View className="p-4">
                                    <Text className="text-slate-900 dark:text-white font-bold text-base mb-0.5">{r.title}</Text>
                                    <Text className="text-slate-500 dark:text-[#92c9a4] text-xs mb-3">{r.subtitle}</Text>
                                    <View className="flex-row items-center gap-4 mb-4">
                                        <View className="flex-row items-center gap-1">
                                            <Text className="text-slate-400 text-xs">⏱ {r.duration}</Text>
                                        </View>
                                        <View className="flex-row items-center gap-1">
                                            <Text className="text-slate-400 text-xs">📋 {r.exercises} exercises</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity className={`w-full py-3 rounded-xl items-center ${r.primary ? 'bg-primary' : 'bg-slate-100 dark:bg-[#23482f]'}`}>
                                        <Text className={`font-bold text-sm ${r.primary ? 'text-[#102216]' : 'text-slate-900 dark:text-white'}`}>
                                            Start Workout
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}

                        {/* Empty / Create New */}
                        <TouchableOpacity
                            className="border-2 border-dashed border-slate-200 dark:border-[#23482f] rounded-2xl p-6 items-center justify-center gap-2"
                            activeOpacity={0.7}
                        >
                            <View className="w-10 h-10 bg-slate-100 dark:bg-[#112217] rounded-full items-center justify-center">
                                <Text className="text-primary text-2xl leading-none">+</Text>
                            </View>
                            <Text className="text-slate-600 dark:text-white font-semibold text-sm">Create New Routine</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ── Recent History ── */}
                <View className="px-5 mt-6">
                    <View className="flex-row justify-between items-center mb-3">
                        <Text className="text-slate-900 dark:text-white text-base font-bold">Recent History</Text>
                        <TouchableOpacity>
                            <Text className="text-primary text-sm font-bold">View All →</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="bg-white dark:bg-[#1a2e21] rounded-2xl border border-slate-100 dark:border-[#23482f] overflow-hidden">
                        {history.map((item, i) => (
                            <View
                                key={i}
                                className={`flex-row items-center px-4 py-3.5 gap-3 ${i < history.length - 1 ? 'border-b border-slate-100 dark:border-[#23482f]' : ''}`}
                            >
                                {/* Date Badge */}
                                <View className="w-12 h-12 bg-slate-100 dark:bg-[#112217] rounded-xl items-center justify-center shrink-0">
                                    <Text className="text-[10px] text-slate-500 dark:text-[#92c9a4] font-bold uppercase leading-none">
                                        {item.date.split(' ')[0]}
                                    </Text>
                                    <Text className="text-slate-900 dark:text-white text-base font-bold leading-tight">
                                        {item.date.split(' ')[1]}
                                    </Text>
                                </View>
                                {/* Info */}
                                <View className="flex-1">
                                    <Text className="text-slate-900 dark:text-white font-bold text-sm">{item.title}</Text>
                                    <Text className="text-slate-400 dark:text-[#92c9a4] text-xs mt-0.5">
                                        {item.duration}  •  {item.volume}
                                        {item.prs > 0 ? `  •  ${item.prs} PRs 🏆` : ''}
                                    </Text>
                                </View>
                                <Text className="text-slate-300 dark:text-[#23482f] text-lg">›</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
