
#include <bits/stdc++.h>
using namespace std;
#define f(i,n)       for(bada i=0;i<n;i++)
#define bada long long


int testing (int chotu,int rbu)
{
    if(chotu >= (rbu+rbu))
    {
        return 0;
    }
    
   for(int jinti = 0;  jinti<= chotu; chotu /=2, jinti++)
   {
       if((chotu & 1) == 1 && ((rbu >> jinti) & 1) == 0) return 0;
   }
   return 1; 
    
}


int main()
{

    bada test;
    cin >> test;
    while (test--)
    {
       long long rajiyo, rabiyo ; 
       cin>>rajiyo>>rabiyo;
       vector<long long> stack11;
       vector<long long> stack12;
       vector<long long>stack13;
      
       for(long long i =1; i<=rajiyo; i++)
       {
           long long temp1 ;
           cin>>temp1;
           stack11.push_back(temp1);
       }
       
        for(long long i =1; i<=rajiyo; i++)
       {
           
           long long temp2 ;
           cin>>temp2;
           stack12.push_back(temp2);
       }
         for(long long i =1; i<=rajiyo; i++)
       {
           long long temp3;
           cin>>temp3;
           stack13.push_back(temp3);
       }
       
       long long amit = 1, sanjay=1 , gaju= 1;
       long long nitu = 0;
       
       
        while((amit<= rajiyo && testing(stack11[amit], rabiyo)) || (sanjay <= rajiyo && testing(stack12[sanjay], rabiyo)) || (gaju <= rajiyo && testing(stack13[gaju], rabiyo))){
             if(amit<= rajiyo && testing(stack11[amit], rabiyo)){
                 nitu = (nitu | stack11[amit++]);
             }
             if(sanjay <= rajiyo && testing(stack12[sanjay], rabiyo)){
                  nitu = (nitu | stack12[sanjay++]);
             }
             if(gaju <= rajiyo && (testing(stack13[gaju], rabiyo))){
                 nitu = (nitu | stack13[gaju++]);
             }
        }
        
        
        
        nitu == rabiyo ? cout<<"Yes"<<endl : cout<<"No"<<endl;
        
       
       
       
      
        
    }

    return 0;
}
