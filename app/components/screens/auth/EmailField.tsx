import React, { FC } from 'react'
import { EMAIL_VALIDATION } from './AuthValidation'
import { Text, TextInput, View } from 'react-native'
import cn from 'clsx'
import { Control, Controller } from 'react-hook-form'
import { AuthFormData } from '@/types/auth.interface'

const EmailField: FC<{ control: Control<AuthFormData> }> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="email"
      rules={{
        required: 'Email is required',
        pattern: {
          value: EMAIL_VALIDATION,
          message: 'Your email is invalid',
        },
      }}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <View
            className={cn(
              'rounded bg-[#272541] border pb-3 pt-4 px-4 my-2',
              !!error ? 'border-red-500' : 'border-transparent',
            )}
          >
            <TextInput
              placeholder="Enter email"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize="none"
              className="text-white text-lg"
            />
          </View>
          {!!error && <Text className="text-red-500">{error.message}</Text>}
        </>
      )}
    />
  )
}

export default EmailField
