import React, { useState } from 'react'
import { Keyboard, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthFormData } from '@/types/auth.interface'
import useAuth from '@/hooks/useAuth'
import Loader from '@/components/screens/ui/Loader'
import Button from '@/components/screens/ui/Button'
import EmailField from '@/components/screens/auth/EmailField'
import PasswordField from '@/components/screens/auth/PasswordField'
import useActions from '@/hooks/useActions'

export const Auth = ({}) => {
  const [isReg, setIsReg] = useState(false)
  const { control, reset, handleSubmit } = useForm<AuthFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })
  const { login, register } = useActions()
  const { isLoading } = useAuth()

  const onSubmit: SubmitHandler<AuthFormData> = (data) => {
    if (isReg) register(data)
    else login(data)

    reset()
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="items-center justify-center flex-1">
        <View className="w-3/4">
          <Text className="text-white text-4xl font-bold text-center mb-5">
            {isReg ? 'Sign up' : 'Sign in'}
          </Text>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <EmailField control={control} />
              <PasswordField control={control} />

              <Button onPress={handleSubmit(onSubmit)}>Submit</Button>

              <Pressable className="w-16 self-end" onPress={() => setIsReg(!isReg)}>
                <Text className="text-opacity-60 text-white text-base mt-3">
                  {isReg ? 'Login' : 'Register'}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
