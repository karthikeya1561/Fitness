import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen() {
    const router = useRouter();
    const [authMethod, setAuthMethod] = useState<'email' | 'mobile'>('email');

    // Input States
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Mobile State
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpField, setShowOtpField] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const handleEmailRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match!');
            return;
        }
        setIsLoading(true);
        // Mock registration
        setTimeout(() => {
            setIsLoading(false);
            Alert.alert('Success', 'Registration successful! Please check your email.');
            router.replace('/login');
        }, 1000);
    };

    const handleSendOtp = async () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowOtpField(true);
            Alert.alert('OTP Sent', 'OTP sent to your mobile!');
        }, 1000);
    };

    const handleVerifyOtp = async () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.replace('/(tabs)');
        }, 1000);
    };

    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
            <ScrollView contentContainerClassName="flex-grow justify-center p-6">
                <View className="items-center mb-8">
                    <Text className="text-slate-900 dark:text-white text-3xl font-black mb-2">Create Account</Text>
                    <Text className="text-slate-500 dark:text-[#92c9a4] text-lg">Join FitTrack today</Text>
                </View>

                <View className="bg-white dark:bg-[#193322]/40 p-6 rounded-xl border border-slate-200 dark:border-[#23482f] shadow-sm">
                    {authMethod === 'email' ? (
                        <View className="gap-4">
                            <View>
                                <Text className="text-slate-700 dark:text-white text-sm font-bold mb-2">Full Name</Text>
                                <TextInput
                                    className="bg-white dark:bg-[#112217] border border-slate-300 dark:border-[#326744] rounded-lg h-12 px-4 text-slate-900 dark:text-white"
                                    placeholder="Your Name"
                                    placeholderTextColor="#9ca3af"
                                    value={fullName}
                                    onChangeText={setFullName}
                                />
                            </View>

                            <View>
                                <Text className="text-slate-700 dark:text-white text-sm font-bold mb-2">Email Address</Text>
                                <TextInput
                                    className="bg-white dark:bg-[#112217] border border-slate-300 dark:border-[#326744] rounded-lg h-12 px-4 text-slate-900 dark:text-white"
                                    placeholder="name@example.com"
                                    placeholderTextColor="#9ca3af"
                                    value={email}
                                    onChangeText={setEmail}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                />
                            </View>

                            <View>
                                <Text className="text-slate-700 dark:text-white text-sm font-bold mb-2">Password</Text>
                                <View className="relative">
                                    <TextInput
                                        className="bg-white dark:bg-[#112217] border border-slate-300 dark:border-[#326744] rounded-lg h-12 px-4 text-slate-900 dark:text-white pr-12"
                                        placeholder="Create a password"
                                        placeholderTextColor="#9ca3af"
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry={!showPassword}
                                    />
                                    <TouchableOpacity
                                        className="absolute right-3 top-3"
                                        onPress={() => setShowPassword(!showPassword)}
                                    >
                                        <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="#9ca3af" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View>
                                <Text className="text-slate-700 dark:text-white text-sm font-bold mb-2">Confirm Password</Text>
                                <View className="relative">
                                    <TextInput
                                        className="bg-white dark:bg-[#112217] border border-slate-300 dark:border-[#326744] rounded-lg h-12 px-4 text-slate-900 dark:text-white pr-12"
                                        placeholder="Confirm password"
                                        placeholderTextColor="#9ca3af"
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}
                                        secureTextEntry={!showConfirmPassword}
                                    />
                                    <TouchableOpacity
                                        className="absolute right-3 top-3"
                                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        <Ionicons name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="#9ca3af" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <TouchableOpacity
                                className="bg-primary h-14 rounded-lg items-center justify-center mt-2 shadow-lg shadow-primary/20"
                                onPress={handleEmailRegister}
                                disabled={isLoading}
                            >
                                <Text className="text-[#102216] text-lg font-bold">{isLoading ? 'Creating Account...' : 'Sign Up'}</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View className="gap-4">
                            {/* Reuse OTP inputs logic if needed, simplifed for brevity here to match login flow generally */}
                            {!showOtpField ? (
                                <>
                                    <View>
                                        <Text className="text-slate-700 dark:text-white text-sm font-bold mb-2">Mobile Number</Text>
                                        <TextInput
                                            className="bg-white dark:bg-[#112217] border border-slate-300 dark:border-[#326744] rounded-lg h-12 px-4 text-slate-900 dark:text-white"
                                            placeholder="+1234567890"
                                            placeholderTextColor="#9ca3af"
                                            value={phone}
                                            onChangeText={setPhone}
                                            keyboardType="phone-pad"
                                        />
                                    </View>
                                    <TouchableOpacity
                                        className="bg-primary h-14 rounded-lg items-center justify-center mt-2"
                                        onPress={handleSendOtp}
                                        disabled={isLoading}
                                    >
                                        <Text className="text-[#102216] text-lg font-bold">{isLoading ? 'Sending...' : 'Send OTP'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setAuthMethod('email')}>
                                        <Text className="text-primary text-center text-sm mt-2">Back to Email Sign Up</Text>
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <>
                                    <View>
                                        <Text className="text-slate-700 dark:text-white text-sm font-bold mb-2">Enter OTP</Text>
                                        <TextInput
                                            className="bg-white dark:bg-[#112217] border border-slate-300 dark:border-[#326744] rounded-lg h-12 px-4 text-slate-900 dark:text-white"
                                            placeholder="123456"
                                            placeholderTextColor="#9ca3af"
                                            value={otp}
                                            onChangeText={setOtp}
                                            keyboardType="number-pad"
                                        />
                                    </View>
                                    <TouchableOpacity
                                        className="bg-primary h-14 rounded-lg items-center justify-center mt-2"
                                        onPress={handleVerifyOtp}
                                        disabled={isLoading}
                                    >
                                        <Text className="text-[#102216] text-lg font-bold">{isLoading ? 'Verifying...' : 'Verify & Sign Up'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setShowOtpField(false)}>
                                        <Text className="text-primary text-center text-sm mt-2">Change Number</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </View>
                    )}

                    <View className="flex-row items-center my-6">
                        <View className="flex-1 h-px bg-slate-200 dark:bg-[#326744]" />
                        <Text className="mx-4 text-xs uppercase tracking-widest text-slate-400 dark:text-[#92c9a4]">Or sign up with</Text>
                        <View className="flex-1 h-px bg-slate-200 dark:bg-[#326744]" />
                    </View>

                    {authMethod === 'email' && (
                        <View className="flex-row gap-4">
                            <TouchableOpacity
                                className="flex-1 h-12 border border-slate-300 dark:border-[#326744] rounded-lg flex-row items-center justify-center gap-2"
                                onPress={() => console.log('Google login')}
                            >
                                <Ionicons name="logo-google" size={20} color={authMethod === 'email' ? 'gray' : 'white'} />
                                <Text className="text-slate-700 dark:text-white font-medium">Google</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className="flex-1 h-12 border border-slate-300 dark:border-[#326744] rounded-lg flex-row items-center justify-center gap-2"
                                onPress={() => setAuthMethod('mobile')}
                            >
                                <Ionicons name="phone-portrait-outline" size={20} color="gray" />
                                <Text className="text-slate-700 dark:text-white font-medium">Mobile</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>

                <View className="flex-row justify-center mt-8">
                    <Text className="text-slate-600 dark:text-[#92c9a4]">Already have an account? </Text>
                    <Link href="/login" asChild>
                        <TouchableOpacity>
                            <Text className="text-primary font-bold">Log in</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
