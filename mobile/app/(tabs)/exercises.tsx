import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

export default function ExercisesScreen() {
    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
            <View className="px-4 py-4 border-b border-slate-200 dark:border-[#23482f]">
                <Text className="text-slate-900 dark:text-white text-3xl font-black mb-4">Exercises</Text>
                {/* Search Bar */}
                <View className="flex-row items-center bg-white dark:bg-[#1a2e21] rounded-xl px-4 h-12 border border-slate-200 dark:border-[#23482f]">
                    {/* Search Icon Placeholder */}
                    <Text className="text-slate-400 mr-2">🔍</Text>
                    <TextInput
                        className="flex-1 text-slate-900 dark:text-white text-base"
                        placeholder="Search exercises..."
                        placeholderTextColor="#9ca3af"
                    />
                </View>
            </View>

            <ScrollView className="flex-1 px-4 pt-4">
                {/* Filter Chips */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-2 mb-6 max-h-10">
                    <TouchableOpacity className="bg-primary px-5 h-9 rounded-full justify-center">
                        <Text className="text-[#102216] font-bold text-sm">All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white dark:bg-[#1a2e21] px-5 h-9 rounded-full justify-center border border-slate-200 dark:border-[#23482f]">
                        <Text className="text-slate-700 dark:text-white font-medium text-sm">Chest</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white dark:bg-[#1a2e21] px-5 h-9 rounded-full justify-center border border-slate-200 dark:border-[#23482f]">
                        <Text className="text-slate-700 dark:text-white font-medium text-sm">Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white dark:bg-[#1a2e21] px-5 h-9 rounded-full justify-center border border-slate-200 dark:border-[#23482f]">
                        <Text className="text-slate-700 dark:text-white font-medium text-sm">Legs</Text>
                    </TouchableOpacity>
                </ScrollView>

                {/* Grid */}
                <View className="flex-row flex-wrap gap-4 pb-8">
                    {/* Card 1 */}
                    <TouchableOpacity className="w-[47%] bg-white dark:bg-[#1a2e21] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f]">
                        <Image
                            source="https://lh3.googleusercontent.com/aida-public/AB6AXuB1SqNdzANWRb7Z9Vg4awBXQYp5FTMBLJGdA5LboqF-z247Qlv_IbZPWPszZMDTgB9Fq3U3NLhf9g7nGHYWj1i-TD2Y9xyW0LSKbwgJuUZw25qJCV7gyIMrzOJiarnBcbcXViwvNcgyciXGcbRB-rZkzCE_U6x9vjyOZnGct_p9eq8Uep61Z0BxgzTnYFkIaoq-tcdt7hr6HQ5SCCbofMaksuoRx0zmZA1DDC2wteUjIzg07OmHQh4tx4T_0h7Thpf4b7wgfZu9qlw"
                            style={{ width: '100%', height: 100 }}
                            contentFit="cover"
                        />
                        <View className="p-3">
                            <Text className="text-slate-900 dark:text-white font-bold text-sm mb-1">Bench Press</Text>
                            <Text className="text-slate-500 dark:text-[#92c9a4] text-xs uppercase">Strength</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Card 2 */}
                    <TouchableOpacity className="w-[47%] bg-white dark:bg-[#1a2e21] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f]">
                        <Image
                            source="https://lh3.googleusercontent.com/aida-public/AB6AXuCRCJUGfSC2qvRaQYPkPIbmGBkotbGubAhbeYSBSkXBj0FEZizpEcFj71jci3J4tbPTpsXrQIYCg-OhSkKxx8gWu5g4zeglt9JnAt7nS-rkNTwDVzTPHwSV8G0qJuJQdh0b7k_E0AP1oHBFeMz1KEosokYF7HOff3t7CbzvvupGoUuszBipaxT88Hx5-jzGdzSCALActgGLYaaYOxkLYKffIQCUcESAw2w_XRXCiPNFsPZDEOw0fCDXT0T2Hg2Z7h8xH8Htm9gP924"
                            style={{ width: '100%', height: 100 }}
                            contentFit="cover"
                        />
                        <View className="p-3">
                            <Text className="text-slate-900 dark:text-white font-bold text-sm mb-1">Deadlift</Text>
                            <Text className="text-slate-500 dark:text-[#92c9a4] text-xs uppercase">Strength</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Card 3 */}
                    <TouchableOpacity className="w-[47%] bg-white dark:bg-[#1a2e21] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f]">
                        <Image
                            source="https://lh3.googleusercontent.com/aida-public/AB6AXuAk9yyUEpDP-EaQcp3KrM5c8y4L1vH5vFabQK0IxG5ID04g3mX-M7-jmfA_eSw-rpTU1VGkmzqwiMn3Ae52RkB9OM6HMreTpL1pFdBmEujPqpnpqV8d1ReGNMkc6oUqxt-e9kRhEuba8yQtIYekMBSeA42eIfQaP-f1odBJ1kQsiSJtaUmK1HIO6zw_PVyDxpO55BEJbDzHURlV53iYX4zjGdniyluukw08Y0eePxXOodwluKVhWbesg-ZZzPlty4X0wZiUCiq-k3I"
                            style={{ width: '100%', height: 100 }}
                            contentFit="cover"
                        />
                        <View className="p-3">
                            <Text className="text-slate-900 dark:text-white font-bold text-sm mb-1">Back Squat</Text>
                            <Text className="text-slate-500 dark:text-[#92c9a4] text-xs uppercase">Strength</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Card 4 */}
                    <TouchableOpacity className="w-[47%] bg-white dark:bg-[#1a2e21] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f]">
                        <Image
                            source="https://lh3.googleusercontent.com/aida-public/AB6AXuCzboLBW9ioYkGz_MCK7_7fp3KYHgROT5c7W3Sehjvu-JCYPRYemuL_KkNQmEWqUiZm1UT3qHeZs9zBeXYQKzCQPvTfCZpL2Qqnamx0OpOseJROpY5WrqiyeQmecL5DNgfJOLlSnbV0xcawE33q9vjjZWK7IUwWWvmlUBHcXX1OpCxNzuJ2wTD19njIgGY0YcG-hkzFREDUIVsvub3VAzXZVwByM_xWBeiZmNTyn-FUXyQ68FF43OSRO9FnrMX3Qjx8aWcz25QXg-k"
                            style={{ width: '100%', height: 100 }}
                            contentFit="cover"
                        />
                        <View className="p-3">
                            <Text className="text-slate-900 dark:text-white font-bold text-sm mb-1">Pull Up</Text>
                            <Text className="text-slate-500 dark:text-[#92c9a4] text-xs uppercase">Bodyweight</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
