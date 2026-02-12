import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProgressScreen() {
    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
            <ScrollView className="flex-1 px-4">
                <Text className="text-slate-900 dark:text-white text-3xl font-black mt-4 mb-2">Progress</Text>
                <Text className="text-slate-500 dark:text-[#92c9a4] text-base mb-6">Track your fitness journey</Text>

                <View className="flex-row gap-4 mb-4">
                    {/* Stat 1 */}
                    <View className="flex-1 bg-white dark:bg-[#1a2e21] p-4 rounded-xl border border-slate-200 dark:border-[#23482f]">
                        <Text className="text-slate-500 text-xs font-bold uppercase mb-1">Volume</Text>
                        <Text className="text-slate-900 dark:text-white text-2xl font-black">45.2k</Text>
                        <Text className="text-green-500 text-xs font-bold">▲ 5.4k</Text>
                    </View>
                    {/* Stat 2 */}
                    <View className="flex-1 bg-white dark:bg-[#1a2e21] p-4 rounded-xl border border-slate-200 dark:border-[#23482f]">
                        <Text className="text-slate-500 text-xs font-bold uppercase mb-1">Active</Text>
                        <Text className="text-slate-900 dark:text-white text-2xl font-black">96 <Text className="text-sm font-normal">hrs</Text></Text>
                        <Text className="text-slate-400 text-xs font-bold">Consistent</Text>
                    </View>
                </View>

                {/* PR Section */}
                <View className="bg-white dark:bg-[#1a2e21] p-6 rounded-xl border border-slate-200 dark:border-[#23482f] mb-8">
                    <Text className="text-slate-900 dark:text-white text-lg font-bold mb-4">Personal Records</Text>

                    <View className="gap-6">
                        {[
                            { name: 'Bench Press', val: '120 kg', icon: '🏆', date: 'Feb 02' },
                            { name: 'Squat', val: '165 kg', icon: '🥇', date: 'Jan 28' },
                            { name: 'Deadlift', val: '200 kg', icon: '⚡', date: 'Jan 15' },
                        ].map((item, i) => (
                            <View key={i} className="flex-row items-center gap-4">
                                <View className="size-10 bg-slate-100 dark:bg-[#112217] rounded-full items-center justify-center">
                                    <Text className="text-xl">{item.icon}</Text>
                                </View>
                                <View className="flex-1">
                                    <View className="flex-row justify-between mb-1">
                                        <Text className="text-slate-900 dark:text-white font-bold">{item.name}</Text>
                                        <Text className="text-primary font-bold">{item.val}</Text>
                                    </View>
                                    <Text className="text-slate-500 dark:text-[#92c9a4] text-xs">{item.date}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
