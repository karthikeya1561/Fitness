import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const prs = [
    { name: 'Bench Press', val: '120 kg', date: 'Feb 02', prev: '115 kg', delta: '+5 kg', icon: '🏆' },
    { name: 'Squat', val: '165 kg', date: 'Jan 28', prev: '160 kg', delta: '+5 kg', icon: '🥇' },
    { name: 'Deadlift', val: '200 kg', date: 'Jan 15', prev: '195 kg', delta: '+5 kg', icon: '⚡' },
    { name: 'OHP', val: '80 kg', date: 'Dec 20', prev: '77.5 kg', delta: '+2.5 kg', icon: '💪' },
];

const weekData = [
    { day: 'M', vol: 18000, height: 80 },
    { day: 'T', vol: 12000, height: 53 },
    { day: 'W', vol: 22000, height: 98 },
    { day: 'T', vol: 0, height: 0 },
    { day: 'F', vol: 15000, height: 67 },
    { day: 'S', vol: 8000, height: 36 },
    { day: 'S', vol: 0, height: 0 },
];

const muscleGroups = [
    { name: 'Chest', pct: 30, color: 'bg-primary' },
    { name: 'Back', pct: 25, color: 'bg-blue-400' },
    { name: 'Legs', pct: 25, color: 'bg-purple-400' },
    { name: 'Shoulders', pct: 12, color: 'bg-orange-400' },
    { name: 'Arms', pct: 8, color: 'bg-pink-400' },
];

export default function ProgressScreen() {
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
                        <Text className="text-slate-900 dark:text-white text-2xl font-bold">Progress</Text>
                        <Text className="text-slate-500 dark:text-[#92c9a4] text-sm mt-0.5">Track your fitness journey</Text>
                    </View>
                    <View className="flex-row bg-slate-100 dark:bg-[#1a2e21] rounded-xl p-1 border border-slate-200 dark:border-[#23482f]">
                        {['7D', '30D', '1Y'].map((label, i) => (
                            <TouchableOpacity
                                key={label}
                                className={`px-3 py-1.5 rounded-lg ${i === 0 ? 'bg-white dark:bg-[#112217] shadow-sm' : ''}`}
                            >
                                <Text className={`text-xs font-bold ${i === 0 ? 'text-primary' : 'text-slate-400 dark:text-[#92c9a4]'}`}>
                                    {label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* ── Stats Cards ── */}
                <View className="flex-row gap-3 px-5 mb-5">
                    {[
                        { label: 'Total Volume', value: '45.2k', unit: 'kg', delta: '+5.4k', positive: true },
                        { label: 'Active Time', value: '96', unit: 'hrs', delta: 'Steady', positive: null },
                    ].map((s, i) => (
                        <View key={i} className="flex-1 bg-white dark:bg-[#1a2e21] p-4 rounded-2xl border border-slate-100 dark:border-[#23482f]">
                            <Text className="text-slate-500 dark:text-[#92c9a4] text-xs font-bold uppercase tracking-wide mb-1">{s.label}</Text>
                            <Text className="text-slate-900 dark:text-white text-2xl font-black">{s.value} <Text className="text-sm font-normal text-slate-500">{s.unit}</Text></Text>
                            <Text className={`text-xs font-bold mt-0.5 ${s.positive === true ? 'text-primary' : s.positive === false ? 'text-red-400' : 'text-slate-400'}`}>
                                {s.positive === true && '▲ '}{s.delta}
                            </Text>
                        </View>
                    ))}
                </View>

                {/* ── Volume Bar Chart ── */}
                <View className="mx-5 bg-white dark:bg-[#1a2e21] rounded-2xl border border-slate-100 dark:border-[#23482f] p-4 mb-5">
                    <Text className="text-slate-900 dark:text-white font-bold text-base mb-4">Weekly Volume</Text>
                    <View className="flex-row items-end justify-between h-24 mb-2">
                        {weekData.map((d, i) => (
                            <View key={i} className="flex-1 items-center gap-1">
                                <View
                                    className={`w-5 rounded-t-md ${d.height > 0 ? 'bg-primary' : 'bg-slate-100 dark:bg-[#112217]'}`}
                                    style={{ height: d.height > 0 ? d.height : 6 }}
                                />
                            </View>
                        ))}
                    </View>
                    <View className="flex-row justify-between">
                        {weekData.map((d, i) => (
                            <View key={i} className="flex-1 items-center">
                                <Text className="text-slate-400 text-[10px] font-bold">{d.day}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* ── Muscle Distribution ── */}
                <View className="mx-5 bg-white dark:bg-[#1a2e21] rounded-2xl border border-slate-100 dark:border-[#23482f] p-4 mb-5">
                    <Text className="text-slate-900 dark:text-white font-bold text-base mb-4">Muscle Distribution</Text>
                    <View className="gap-3">
                        {muscleGroups.map(m => (
                            <View key={m.name}>
                                <View className="flex-row justify-between mb-1.5">
                                    <Text className="text-slate-700 dark:text-white text-sm font-medium">{m.name}</Text>
                                    <Text className="text-slate-500 dark:text-[#92c9a4] text-sm font-bold">{m.pct}%</Text>
                                </View>
                                <View className="h-2 bg-slate-100 dark:bg-[#112217] rounded-full overflow-hidden">
                                    <View className={`h-full ${m.color} rounded-full`} style={{ width: `${m.pct}%` }} />
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* ── Personal Records ── */}
                <View className="mx-5 bg-white dark:bg-[#1a2e21] rounded-2xl border border-slate-100 dark:border-[#23482f] p-4">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-slate-900 dark:text-white font-bold text-base">Personal Records</Text>
                        <TouchableOpacity>
                            <Text className="text-primary text-sm font-bold">View All →</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="gap-4">
                        {prs.map((item, i, arr) => (
                            <View key={i}>
                                <View className="flex-row items-center gap-3">
                                    <View className="w-10 h-10 bg-slate-100 dark:bg-[#112217] rounded-full items-center justify-center shrink-0">
                                        <Text className="text-xl leading-none">{item.icon}</Text>
                                    </View>
                                    <View className="flex-1">
                                        <View className="flex-row justify-between items-center">
                                            <Text className="text-slate-900 dark:text-white font-bold text-sm">{item.name}</Text>
                                            <Text className="text-primary font-black text-sm">{item.val}</Text>
                                        </View>
                                        <View className="flex-row items-center gap-2 mt-0.5">
                                            <Text className="text-slate-400 text-xs">{item.date}</Text>
                                            <Text className="text-slate-300 dark:text-[#23482f]">•</Text>
                                            <Text className="text-slate-400 text-xs">Prev: {item.prev}</Text>
                                            <Text className="text-primary text-xs font-bold">{item.delta}</Text>
                                        </View>
                                    </View>
                                </View>
                                {i < arr.length - 1 && (
                                    <View className="h-px bg-slate-100 dark:bg-[#23482f] mt-4 ml-13" />
                                )}
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
