import React, { FC } from 'react'
import { PASSWORD_VALIDATION } from './AuthValidation'
import { Text, TextInput, View } from 'react-native'
import cn from 'clsx'
import { Control, Controller } from 'react-hook-form'
import { AuthFormData } from '@/types/auth.interface'

const PasswordField: FC<{ control: Control<AuthFormData> }> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="password"
      rules={{
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Password should be more then 6 symbols',
        },
        pattern: {
          value: PASSWORD_VALIDATION,
          message: 'Your password is invalid',
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
              placeholder="Enter password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize="none"
              className="text-white text-lg"
              // secureTextEntry
            />
          </View>
          {!!error && <Text className="text-red-500">{error.message}</Text>}
        </>
      )}
    />
  )
}

export default PasswordField
