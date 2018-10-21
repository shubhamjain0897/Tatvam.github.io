#include<stdio.h>
#include<conio.h>
#include<String.h>
int main()
{
	char a[50];
	char b[50];
	int len1,len2;
	
	printf("Enter 1st string");
	gets(a);
	printf("Enter 2nd string");
	gets(b);
	len1=strlen(a);
	len2=strlen(b);
	printf("%d",len1);
		printf("%d",len2);
	if(len1==len2)
	{
		printf("Anagram");
	}
	
	
	
	
}
