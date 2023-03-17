#include <bits/stdc++.h>
using namespace std;

#define N 9
int grid[N][N];

bool solve()
{
    int i, j;
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            if (grid[i][j] == 0)
            {
                break;
            }
            if (i == N && j == N)
            {
                return true;
            }
        }
    }
    for (int n = 1; n <= N; n++)
    {
        if (isSafe(i, j, n))
        {
            grid[i][j] = n;
            if (solve())
            {
                return true;
            }
            grid[i][j] = 0;
        }
    }
    return false;
}

bool isSafe(int i, int j, int n)
{
    for (int k = 0; k < N; k++)
    {
        if (grid[k][j] == n || grid[i][k] == n)
        {
            return false;
        }
        int s = sqrt(N);
        int rs = i - i % s;
        int cs = j - j % s;
        for (int i = 0; i < s; i++)
        {
            for (int j = 0; j < s; j++)
            {
                if (grid[i + rs][j + cs] == n)
                {
                    return false;
                }
            }
        }
        return true;
    }
}
int main()
{
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            cin >> grid[i][j];
        }
    }
    solve();
    return 0;
}