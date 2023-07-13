
#include <bits/stdc++.h>
using namespace std;
#define f(i,n)       for(bada i=0;i<n;i++)
#define bada long long



int  main()
{

    bada test;
    cin >> test;
    while (test--)
    {
        int first, second;
        cin>>first>>second;
        long long temp1=0, temp2 = 0;
        
         
        for(int i =0; i<first; i++){
            int ekb ;
            cin>>ekb;
            temp1+=ekb;
        }
        for(int j =0; j<second; j++)
        {
              int dbr ; 
              cin>>dbr; 
              temp2+=dbr;
        }
        if(temp1>temp2)   cout<<"Tsondu"<<endl;
        else if(temp1<temp2) cout<<"Tenzing"<<endl;
        else cout<<"Draw"<<endl;
        
    }

    return 0;
}