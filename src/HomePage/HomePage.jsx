import { useState } from "preact/hooks";
import './HomePage.css'
import BinaryConverter from "../DecimalToBinary/DecimalToBinary";
import DecimalConverter from "../BinaryToDecimal/BinaryToDecimal";
import ToggleButton from "../buttonDisplay/ButtonDisplay";

export default function HomePage(){
    return(
        <>
            <div className='main'>
                <div>
                    <div className='formHome'>
                    <h1 className='headerHome'>Decimal to Binary Converter</h1>
                    <BinaryConverter></BinaryConverter>
                    </div>
                </div>
                <div>
                    <div className='formHome'>
                    <h1 className='headerHome'>Binary to Decimal Converter</h1>
                    <DecimalConverter></DecimalConverter>
                    </div>
                </div> 
            </div>
            <div className='divText'>
                    <div className='divH2'>
                        <h2>How does it work?</h2>
                        <p>If you are looking for simple tool to help you make calculations with binary and decimal numbers, you are in the right place! </p>
                        <p>This website aims to assist you with basic calculation and offers a basic and intuitive calculator tool that you can use for both Binary to Decimal and Decimal to Binary conversion.</p>
                        <b>Binary conversion involves transforming numbers between the decimal system, which we use daily, and the binary system, essential for computers.</b>
                        <p>Decimal to binary conversion breaks a number into powers of 2, while binary sums the values of binary digits based on their positions.</p>
                        <p>Keep reading for detailed explanation and examples!</p>
                    </div>  
                <div className='textDescription'>
                <ToggleButton buttonText='What is Decimal to Binary Conversion?' startOpen={true}>
                    <>
                    <div>
                    To get a number in binary we need to transform the numbers from the decimal system, which have base 10, into the binary system with base 2.
                    <p><b>In binary, each digit represents a power of 2, starting from the rightmost position.</b> The convertion works by repeteadly dividing the decimal number by 2,
                    noting the remainder each time (which becomes a binary digit), and continuing until the quotient reaches 0. The binary number is then formed by reading 
                    the remainders from bottom to top. </p>
                    <p>This method is fundamental to computer science because computers store and process all data, including text, numbers, and images, in binary form. </p>
                    </div>
                    </>
                </ToggleButton>     

                <ToggleButton buttonText='Step-by-step Guide: Decimal to Binary Conversion'>
                    <>
                        <div><b>In order to manually calculate the equivalent in binary numbers, follow these steps: </b>
                        <ol>
                            <li>Start with the rightmost digit of the binary number.</li>
                            <li>Multiply this digit by the corresponding power of 2.</li>
                            <li>Repeat steps 1 and 2 for each digit in th binary number.</li>
                            <li>Add the results of all the multiplications to get the decimal number.</li>
                        </ol>
                        </div>
                        <p></p>
                        <h3>Binary to Decimal Table</h3>
                        <div className='divTable'>
                        <table>
                        <thead>
                        <tr><th>Decimal</th><th>Binary</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>1</td></tr>
                            <tr><td>2</td><td>10</td></tr>
                            <tr><td>3</td><td>11</td></tr>
                            <tr><td>4</td><td>100</td></tr>
                            <tr><td>5</td><td>101</td></tr>
                            <tr><td>6</td><td>110</td></tr>
                            <tr><td>7</td><td>111</td></tr>
                            <tr><td>8</td><td>1000</td></tr>
                            <tr><td>9</td><td>1001</td></tr>
                            <tr><td>10</td><td>1010</td></tr>
                            <tr><td>11</td><td>1011</td></tr>
                            <tr><td>12</td><td>1100</td></tr>
                            <tr><td>13</td><td>1101</td></tr>
                            <tr><td>14</td><td>1110</td></tr>
                            <tr><td>15</td><td>1111</td></tr>
                            <tr><td>16</td><td>10000</td></tr>
                            <tr><td>17</td><td>10001</td></tr>
                            <tr><td>18</td><td>10010</td></tr>
                            <tr><td>19</td><td>10011</td></tr>
                            <tr><td>20</td><td>10100</td></tr>
                            <tr><td>21</td><td>10101</td></tr>
                            <tr><td>22</td><td>10110</td></tr>
                            <tr><td>23</td><td>10111</td></tr>
                            <tr><td>24</td><td>11000</td></tr>
                            <tr><td>25</td><td>11001</td></tr>
                            <tr><td>26</td><td>11010</td></tr>
                            <tr><td>27</td><td>11011</td></tr>
                            <tr><td>28</td><td>11100</td></tr>
                            <tr><td>29</td><td>11101</td></tr>
                            <tr><td>30</td><td>11110</td></tr>
                            <tr><td>31</td><td>11111</td></tr>
                            <tr><td>32</td><td>100000</td></tr>
                            <tr><td>33</td><td>100001</td></tr>
                            <tr><td>34</td><td>100010</td></tr>
                            <tr><td>35</td><td>100011</td></tr>
                            <tr><td>36</td><td>100100</td></tr>
                            <tr><td>37</td><td>100101</td></tr>
                            <tr><td>38</td><td>100110</td></tr>
                            <tr><td>39</td><td>100111</td></tr>
                            <tr><td>40</td><td>101000</td></tr>
                            <tr><td>41</td><td>101001</td></tr>
                            <tr><td>42</td><td>101010</td></tr>
                            <tr><td>43</td><td>101011</td></tr>
                            <tr><td>44</td><td>101100</td></tr>
                            <tr><td>45</td><td>101101</td></tr>
                            <tr><td>46</td><td>101110</td></tr>
                            <tr><td>47</td><td>101111</td></tr>
                            <tr><td>48</td><td>110000</td></tr>
                            <tr><td>49</td><td>110001</td></tr>
                            <tr><td>50</td><td>110010</td></tr>
                            <tr><td>51</td><td>110011</td></tr>
                            <tr><td>52</td><td>110100</td></tr>
                            <tr><td>53</td><td>110101</td></tr>
                            <tr><td>54</td><td>110110</td></tr>
                            <tr><td>55</td><td>110111</td></tr>
                            <tr><td>56</td><td>111000</td></tr>
                            <tr><td>57</td><td>111001</td></tr>
                            <tr><td>58</td><td>111010</td></tr>
                            <tr><td>59</td><td>111011</td></tr>
                            <tr><td>60</td><td>111100</td></tr>
                            <tr><td>61</td><td>111101</td></tr>
                            <tr><td>62</td><td>111110</td></tr>
                            <tr><td>63</td><td>111111</td></tr>
                            <tr><td>64</td><td>1000000</td></tr>
                            <tr><td>65</td><td>1000001</td></tr>
                            <tr><td>66</td><td>1000010</td></tr>
                            <tr><td>67</td><td>1000011</td></tr>
                            <tr><td>68</td><td>1000100</td></tr>
                            <tr><td>69</td><td>1000101</td></tr>
                            <tr><td>70</td><td>1000110</td></tr>
                            <tr><td>71</td><td>1000111</td></tr>
                            <tr><td>72</td><td>1001000</td></tr>
                            <tr><td>73</td><td>1001001</td></tr>
                            <tr><td>74</td><td>1001010</td></tr>
                            <tr><td>75</td><td>1001011</td></tr>
                            <tr><td>76</td><td>1001100</td></tr>
                            <tr><td>77</td><td>1001101</td></tr>
                            <tr><td>78</td><td>1001110</td></tr>
                            <tr><td>79</td><td>1001111</td></tr>
                            <tr><td>80</td><td>1010000</td></tr>
                            <tr><td>81</td><td>1010001</td></tr>
                            <tr><td>82</td><td>1010010</td></tr>
                            <tr><td>83</td><td>1010011</td></tr>
                            <tr><td>84</td><td>1010100</td></tr>
                            <tr><td>85</td><td>1010101</td></tr>
                            <tr><td>86</td><td>1010110</td></tr>
                            <tr><td>87</td><td>1010111</td></tr>
                            <tr><td>88</td><td>1011000</td></tr>
                            <tr><td>89</td><td>1011001</td></tr>
                            <tr><td>90</td><td>1011010</td></tr>
                            <tr><td>91</td><td>1011011</td></tr>
                            <tr><td>92</td><td>1011100</td></tr>
                            <tr><td>93</td><td>1011101</td></tr>
                            <tr><td>94</td><td>1011110</td></tr>
                            <tr><td>95</td><td>1011111</td></tr>
                            <tr><td>96</td><td>1100000</td></tr>
                            <tr><td>97</td><td>1100001</td></tr>
                            <tr><td>98</td><td>1100010</td></tr>
                            <tr><td>99</td><td>1100011</td></tr>
                            <tr><td>100</td><td>1100100</td></tr>
                        </tbody>  
                        </table>
                        </div>
                    </>
                </ToggleButton>
                
                <ToggleButton buttonText='What is Binary to Decimal Conversion?'>
                    <>
                        <p>
                        Binary to Decimal conversion is the process of transforming a number represented in the binary numeral system, with base 2, into its equivalent
                        in the decimal numeral system, with base 10. <b>Binary is a system that uses only two digits, 0 and 1, which are often used in digital computing systems. </b> 
                        In contrast, the decimal system is the standar system for denoting number, using digits from 0 to 9. 
                        </p>
                    </>
                </ToggleButton>
                <ToggleButton buttonText='Step-by-step Guide: Binary to Decimal Conversion'>
                    <>
                        <p>
                        To converts a binary number to a decimal number, follow these steps:
                        </p>
                        <ol>
                            <b><li>Understand the Position Value:</li></b>
                            <div>Each digit (bit) in a binary number represents a power of 2, starting from 0 on the right. For example: 
                                <p>The rightmost bit is 2<sup>0</sup>.</p>
                                <p>The next bit to the left is 2<sup>1</sup>.</p>
                                <p>The third bit to the left is 2<sup>2</sup>, and so on.</p>
                            </div>
                            <b><li>Write down the Binary Number and Label each Bit:</li></b>
                            <div>Place the binary number in a row and write the corresponding power of 2 below each digit. For example, if the binary number is 1011: 
                                <p>The positions are 2<sup>3</sup>, 2<sup>2</sup>, 2<sup>1</sup>, 2<sup>0</sup>.</p>
                                <p>Align these powers with the binary digits: 1(2<sup>3</sup>), 0(2<sup>2</sup>), 1(2<sup>1</sup>), 1(2<sup>0</sup>).</p>
                            </div>
                            <b><li>Multiply each Binary Digit by its Position Value:</li></b>
                            <div>Multiply each bit (0 or 1) by the power of 2 for its position. In our example: 
                                <p>1 x 2<sup>3</sup> =8,</p>
                                <p>0 x 2<sup>2</sup> =0,</p>
                                <p>1 x 2<sup>1</sup> =2,</p>
                                <p>1 x 2<sup>0</sup> =1.</p>
                            </div>
                            <b><li>Add the Results Together:</li></b>
                            <div>Sum up all the products from step 3 to get the Decimal Value:
                                <p>8 + 0 + 2 + 1 = 11.</p>
                                <b>The Decimal Equivalent of the Binary Number 1011 is 11.</b>
                            </div>
                        </ol>
                        
                        
                    </>
                </ToggleButton>  
                </div>
            </div>   
        </>
        
    )
}