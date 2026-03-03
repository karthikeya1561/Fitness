import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { useState } from 'react';

const categories = ['All', 'Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Abs'];

const exercises = [
    {
        name: 'Bench Press',
        muscle: 'Chest • Barbell',
        type: 'Strength',
        target: 'Pectorals',
        added: false,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1SqNdzANWRb7Z9Vg4awBXQYp5FTMBLJGdA5LboqF-z247Qlv_IbZPWPszZMDTgB9Fq3U3NLhf9g7nGHYWj1i-TD2Y9xyW0LSKbwgJuUZw25qJCV7gyIMrzOJiarnBcbcXViwvNcgyciXGcbRB-rZkzCE_U6x9vjyOZnGct_p9eq8Uep61Z0BxgzTnYFkIaoq-tcdt7hr6HQ5SCCbofMaksuoRx0zmZA1DDC2wteUjIzg07OmHQh4tx4T_0h7Thpf4b7wgfZu9qlw',
    },
    {
        name: 'Deadlift',
        muscle: 'Back • Barbell',
        type: 'Strength',
        target: 'Posterior Chain',
        added: true,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRCJUGfSC2qvRaQYPkPIbmGBkotbGubAhbeYSBSkXBj0FEZizpEcFj71jci3J4tbPTpsXrQIYCg-OhSkKxx8gWu5g4zeglt9JnAt7nS-rkNTwDVzTPHwSV8G0qJuJQdh0b7k_E0AP1oHBFeMz1KEosokYF7HOff3t7CbzvvupGoUuszBipaxT88Hx5-jzGdzSCALActgGLYaaYOxkLYKffIQCUcESAw2w_XRXCiPNFsPZDEOw0fCDXT0T2Hg2Z7h8xH8Htm9gP924',
    },
    {
        name: 'Back Squat',
        muscle: 'Legs • Barbell',
        type: 'Strength',
        target: 'Quadriceps',
        added: false,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk9yyUEpDP-EaQcp3KrM5c8y4L1vH5vFabQK0IxG5ID04g3mX-M7-jmfA_eSw-rpTU1VGkmzqwiMn3Ae52RkB9OM6HMreTpL1pFdBmEujPqpnpqV8d1ReGNMkc6oUqxt-e9kRhEuba8yQtIYekMBSeA42eIfQaP-f1odBJ1kQsiSJtaUmK1HIO6zw_PVyDxpO55BEJbDzHURlV53iYX4zjGdniyluukw08Y0eePxXOodwluKVhWbesg-ZZzPlty4X0wZiUCiq-k3I',
    },
    {
        name: 'Wide Pull-ups',
        muscle: 'Back • Bodyweight',
        type: 'Bodyweight',
        target: 'Lats',
        added: false,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzboLBW9ioYkGz_MCK7_7fp3KYHgROT5c7W3Sehjvu-JCYPRYemuL_KkNQmEWqUiZm1UT3qHeZs9zBeXYQKzCQPvTfCZpL2Qqnamx0OpOseJROpY5WrqiyeQmecL5DNgfJOLlSnbV0xcawE33q9vjjZWK7IUwWWvmlUBHcXX1OpCxNzuJ2wTD19njIgGY0YcG-hkzFREDUIVsvub3VAzXZVwByM_xWBeiZmNTyn-FUXyQ68FF43OSRO9FnrMX3Qjx8aWcz25QXg-k',
    },
    {
        name: 'OHP (Barbell)',
        muscle: 'Shoulders • Barbell',
        type: 'Strength',
        target: 'Deltoids',
        added: false,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAssMhGq6chrVC_RR60YTK0teL2J7E8sqe8nzwYw4D7iEQd58uEi51DsBQr2Gz-RE1CzqglqVnQiZwJ65jeFfrLV9YLAc0GOsIiFYyPacawxYOF01n3cqf3kciKp-AYyHPLbm3vpgXM-VV23YL6EBgYazAMwXoKm_ix3G2p2TfuISA7l5N6qquPe4Kbox7mPhWHpo67AqgS7WyXVT2ilzNJm5QV-UO6O6ziV9Zipol9qLxVEQ5LMuFBw_peMHKtp0u05lUNneqbt60',
    },
    {
        name: 'Dumbbell Curl',
        muscle: 'Arms • Dumbbell',
        type: 'Strength',
        target: 'Biceps',
        added: false,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYiLGtT3Fs-hVuJQJVc7Htai9bhNYQGRxeIbKHBTdnswEOFHeTkZJy1-izRIEueFzYcZWq8cO8tayn4C0r6ivEpNhxetuDkzb98JzkMAGizjRfzNi3jKMTqNTPhnK9hqOE0ObYoAJ92ANAt_9Vv_xE9XAkeerlaSI0fd0WHZRWsuAli_pLD8J9CPDyk2tWejVAUrU3H71L0zntkcJGlcqYSXn99d49szDc4kDgKEPWe4C7VFTDmFHVeUttKFeDlHTIDuQ63DxnCfA',
    },
];

export default function ExercisesScreen() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [addedMap, setAddedMap] = useState<Record<string, boolean>>({ 'Deadlift': true });

    const toggleAdded = (name: string) => {
        setAddedMap(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const addedCount = Object.values(addedMap).filter(Boolean).length;

    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark" edges={['top']}>
            {/* ── Fixed Header ── */}
            <View className="px-5 pt-4 pb-3 border-b border-slate-100 dark:border-[#23482f]">
                <View className="flex-row justify-between items-center mb-4">
                    <View>
                        <Text className="text-slate-900 dark:text-white text-2xl font-bold">Exercise Library</Text>
                        <Text className="text-slate-500 dark:text-[#92c9a4] text-xs mt-0.5">Find and add to your routine</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center gap-1 bg-primary/10 border border-primary/20 px-3 py-2 rounded-xl">
                        <Text className="text-primary text-xs font-bold">+ Custom</Text>
                    </TouchableOpacity>
                </View>
                {/* Search */}
                <View className="flex-row items-center bg-white dark:bg-[#1a2e21] rounded-xl px-4 h-12 border border-slate-200 dark:border-[#23482f]">
                    <Text className="text-slate-400 mr-2 text-base">🔍</Text>
                    <TextInput
                        className="flex-1 text-slate-900 dark:text-white text-sm"
                        placeholder="Search exercises..."
                        placeholderTextColor="#9ca3af"
                    />
                </View>
            </View>

            {/* ── Filter Chips ── */}
            <View className="py-3 border-b border-slate-100 dark:border-[#23482f]">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, gap: 8 }}>
                    {categories.map(cat => (
                        <TouchableOpacity
                            key={cat}
                            onPress={() => setActiveCategory(cat)}
                            className={`h-9 px-4 rounded-full justify-center items-center border ${activeCategory === cat ? 'bg-primary border-primary' : 'bg-white dark:bg-[#1a2e21] border-slate-200 dark:border-[#23482f]'}`}
                        >
                            <Text className={`text-xs font-bold ${activeCategory === cat ? 'text-[#102216]' : 'text-slate-700 dark:text-white'}`}>
                                {cat}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* ── Exercise Grid ── */}
            <ScrollView
                className="flex-1"
                contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: addedCount > 0 ? 100 : 24, gap: 12 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Two-column grid using row wrapping */}
                <View className="flex-row flex-wrap" style={{ gap: 12 }}>
                    {exercises.map((ex) => {
                        const isAdded = addedMap[ex.name] ?? false;
                        return (
                            <View
                                key={ex.name}
                                style={{ width: '47.5%' }}
                                className="bg-white dark:bg-[#1a2e21] rounded-2xl overflow-hidden border border-slate-100 dark:border-[#23482f]"
                            >
                                {/* Image */}
                                <View className="relative">
                                    <Image
                                        source={ex.img}
                                        style={{ width: '100%', height: 100 }}
                                        contentFit="cover"
                                    />
                                    <View className="absolute top-2 left-2 bg-black/60 backdrop-blur px-1.5 py-0.5 rounded">
                                        <Text className="text-primary text-[8px] font-bold uppercase">{ex.type}</Text>
                                    </View>
                                </View>
                                {/* Info */}
                                <View className="p-3">
                                    <Text className="text-slate-900 dark:text-white font-bold text-sm leading-tight" numberOfLines={1}>
                                        {ex.name}
                                    </Text>
                                    <Text className="text-slate-400 dark:text-[#92c9a4] text-[9px] uppercase font-medium mt-0.5 mb-3" numberOfLines={1}>
                                        {ex.muscle}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => toggleAdded(ex.name)}
                                        className={`w-full h-8 rounded-lg items-center justify-center ${isAdded ? 'bg-primary' : 'bg-primary/10 dark:bg-primary/15 border border-primary/20'}`}
                                    >
                                        <Text className={`text-xs font-bold ${isAdded ? 'text-[#102216]' : 'text-primary'}`}>
                                            {isAdded ? '✓ Added' : '+ Add'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>

            {/* ── Sticky Selection Footer ── */}
            {addedCount > 0 && (
                <View className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-[#0d1f12]/95 border-t border-slate-200 dark:border-[#23482f] px-5 py-4 flex-row items-center justify-between" style={{ paddingBottom: 24 }}>
                    <View className="flex-row items-center gap-3">
                        <View className="w-9 h-9 bg-primary rounded-full items-center justify-center">
                            <Text className="text-[#102216] font-black text-sm">{addedCount}</Text>
                        </View>
                        <View>
                            <Text className="text-slate-900 dark:text-white font-bold text-sm">
                                {addedCount} Selected
                            </Text>
                            <Text className="text-slate-400 text-xs">Ready to add</Text>
                        </View>
                    </View>
                    <View className="flex-row gap-2">
                        <TouchableOpacity className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#1a2e21]">
                            <Text className="text-slate-600 dark:text-white text-xs font-bold">Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="px-4 py-2.5 rounded-xl bg-primary">
                            <Text className="text-[#102216] text-xs font-bold">Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
}
