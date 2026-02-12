import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WorkoutsScreen() {
    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
            <ScrollView className="flex-1 px-4">
                <Text className="text-slate-900 dark:text-white text-3xl font-black mt-4 mb-2">Workouts</Text>
                <Text className="text-slate-500 dark:text-[#92c9a4] text-base mb-6">Manage your routines</Text>

                <View className="gap-4">
                    {/* Routine Card */}
                    <View className="bg-white dark:bg-[#1a2e21] p-5 rounded-xl border border-slate-200 dark:border-[#23482f]">
                        <View className="flex-row justify-between mb-4">
                            <View className="bg-primary/10 px-3 py-1 rounded-full self-start">
                                <Text className="text-primary text-xs font-bold uppercase">Strength</Text>
                            </View>
                            <Text className="text-slate-400 text-xs">65 min</Text>
                        </View>
                        <Text className="text-slate-900 dark:text-white text-xl font-bold mb-1">Push Day A</Text>
                        <Text className="text-slate-500 dark:text-[#92c9a4] text-sm mb-6">Focus on compound movements for chest and shoulders.</Text>
                        <TouchableOpacity className="bg-primary w-full py-3 rounded-lg items-center">
                            <Text className="text-[#102216] font-bold">Start Workout</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Routine Card */}
                    <View className="bg-white dark:bg-[#1a2e21] p-5 rounded-xl border border-slate-200 dark:border-[#23482f]">
                        <View className="flex-row justify-between mb-4">
                            <View className="bg-primary/10 px-3 py-1 rounded-full self-start">
                                <Text className="text-primary text-xs font-bold uppercase">Hypertrophy</Text>
                            </View>
                            <Text className="text-slate-400 text-xs">55 min</Text>
                        </View>
                        <Text className="text-slate-900 dark:text-white text-xl font-bold mb-1">Pull Day B</Text>
                        <Text className="text-slate-500 dark:text-[#92c9a4] text-sm mb-6">Vertical and horizontal pulling focus.</Text>
                        <TouchableOpacity className="bg-slate-100 dark:bg-[#23482f] w-full py-3 rounded-lg items-center">
                            <Text className="text-slate-900 dark:text-white font-bold">Start Workout</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Create New */}
                    <TouchableOpacity className="border-2 border-dashed border-slate-300 dark:border-[#23482f] p-6 rounded-xl items-center justify-center">
                        <View className="size-10 bg-slate-100 dark:bg-[#112217] rounded-full items-center justify-center mb-2">
                            <Text className="text-slate-400 text-2xl">+</Text>
                        </View>
                        <Text className="text-slate-500 dark:text-white text-sm font-bold">Create New Routine</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
