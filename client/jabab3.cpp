
#include <bits/stdc++.h>
using namespace std;
#define f(i,n)       for(bada i=0;i<n;i++)
#define bada long long
#define hamriqueueu priority_queue<pair<int, int>>

int main()
{

    bada test;
    cin >> test;
    while (test--)
    {
       int input;
    cin >> input;
     int ipr[input];
    vector<hamriqueueu> pelhewaliqueueu(input + 1);
    
    int iple = 0;
    while(iple<input)
    {
          cin >> ipr[iple];
        ipr[iple]--;
        iple++;
    }
    

    vector<int> recrusivepp(input + 1, 0);

      int loop  = 0;
      while(loop<input)
      {
        recrusivepp[loop + 1] = recrusivepp[loop];
        if (!pelhewaliqueueu[ipr[loop]].empty()) {
            int j = pelhewaliqueueu[ipr[loop]].top().second;
            recrusivepp[loop + 1] = max(recrusivepp[loop + 1], recrusivepp[j] - j + loop + 1);
        }
        pelhewaliqueueu[ipr[loop]].push({ recrusivepp[loop] - loop, loop });
           loop++;
      }
    
    
    cout << recrusivepp[input] << endl;
    }
    

    return 0;
}
