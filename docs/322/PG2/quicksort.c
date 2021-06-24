/*Shawn O'Neil
Quicksort using only goto
Everything works, should be no compiler warnings (other than no reference to main)*/

#include <stdlib.h>
#include <stdio.h>

void QuickSort (int *T, int sz);

typedef struct MyStack
	{
	int *T, bct, act, ect;
	} MyStack;
	
/*void printStack(MyStack *thestack, int howmany)
	{
	int i;
	printf("stack: ");
	for(i = 0; i < howmany; i++)
		{
		printf("%d, ", thestack[i]);
		}
	printf("\n");
	}*/

void QuickSort (int *T, int sz)
	{
	int *bef, *aft, *eq, stacksize;
	int bct, act, ect, i, piv;
	MyStack *stack;
	
	stack = malloc(sz*sizeof(MyStack));
	stacksize = 0;
	
	Beginning: 
	
	/*printStack(stack, stacksize);*/
	bef = malloc(sz * sizeof(int));
	aft = malloc(sz * sizeof(int));
	eq = malloc(sz * sizeof(int));
	bct = 0; act = 0; ect = 0;

	
	if(sz <= 1) goto Done;
		piv = rand()%sz;
		
		/*for(i = 0; i < sz; i++)
			{
			if (T[i] < T[piv]) bef[bct++] = T[i];
			else if (T[i] == T[piv]) eq[ect++] = T[i];
			else	aft[act++] = T[i];
			}
		*/

		i = 0;
		ForLoop1:
		if(i >= sz) goto OutLoop1;
			if (T[i] < T[piv]) goto PutInBefore;
			if (T[i] == T[piv]) goto PutInEqual;
			if (T[i] > T[piv]) goto PutInAfter;
			AfterPutIn:
			i++;
		goto ForLoop1;
		OutLoop1:


		/*for(i = 0; i < bct; i++) T[i] = bef[i];*/
		i = 0;
		ForLoop2:
		if(i >= bct) goto OutLoop2;
			T[i] = bef[i];
			i++;
		goto ForLoop2;
		OutLoop2:
	
		/*for(i = 0; i < ect; i++) T[bct+i] = eq[i];*/
		i = 0;
		ForLoop3:
		if(i >= ect) goto OutLoop3;
			T[bct+i] = eq[i];
			i++;
		goto ForLoop3;
		OutLoop3:
		
		/*for(i = 0; i < act; i++) T[bct+ect+i] = aft[i];*/
		i = 0;
		ForLoop4:
		if(i >= act) goto OutLoop4;
			T[bct+ect+i] = aft[i];
			i++;
		goto ForLoop4;
		OutLoop4:
		
		free(bef);
		free(aft);
		free(eq);
		
		/*QuickSort(T, bct);*/
		sz = bct;
		stack[stacksize].T = T;
		stack[stacksize].bct = bct;
		stack[stacksize].ect = ect;
		stack[stacksize++].act = act;
		goto Beginning;
	
		/*QuickSort(&T[bct + ect], act);*/
		TailRecursion:
		T = &T[bct + ect];
		sz = act;
		goto Beginning;
		
		goto EndMethod;
		
		PutInBefore:
		bef[bct++] = T[i];
		goto AfterPutIn;
		
		PutInEqual:
		eq[ect++] = T[i];
		goto AfterPutIn;
		
		PutInAfter:
		aft[act++] = T[i];
		goto AfterPutIn;
		
		EndMethod:
	Done:
		if(stacksize == 0) goto ReallyDone;
		T = stack[--stacksize].T;
		bct = stack[stacksize].bct;
		ect = stack[stacksize].ect;
		act = stack[stacksize].act;
		goto TailRecursion;
	ReallyDone:
	i = 9898;
	}
	
/*int main (int argc, char **argv)
	{
	int AR[10000], i;

	srand (time (NULL));
	for (i=0; i < 10000; i++) AR[i] = rand()%1000;
	for (i=0; i < 10000; i++) printf ("%d ",AR[i]);
	printf ("\n\n");
	QuickSort (AR,10000);
	for (i=0; i < 10000; i++) printf ("%d ",AR[i]);
	printf ("\n");
	return EXIT_SUCCESS;
	}*/
