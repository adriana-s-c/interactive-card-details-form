import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserCardDetailsContext } from "../../context";

export function CardNumberInput({ isValidCardNumber, submit }) {
  const [userCardDetails, setUserCardDetails] = useContext(
    UserCardDetailsContext
  );
  return (
    <FormControl
      isInvalid={userCardDetails.cardNumber.length < 16 && submit}
      mb="10px"
    >
      <FormLabel color="#21092F" fontSize="15px" textTransform="uppercase">
        Card Number
      </FormLabel>
      <Input
        type="text"
        focusBorderColor="#6448FE"
        fontSize="18px"
        placeholder="e.g. 1234 5678 9123 0000"
        _placeholder={{ color: "#DEDDDF" }}
        value={userCardDetails.cardNumber}
        onChange={(e) =>
          setUserCardDetails({
            ...userCardDetails,
            cardNumber: e.target.value.replace(/\D/g, ""),
          })
        }
        maxLength="16"
        inputMode="decimal"
        isValid={isValidCardNumber}
      />
      <FormErrorMessage>Number is to short</FormErrorMessage>
    </FormControl>
  );
}
