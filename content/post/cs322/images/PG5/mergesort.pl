split([],[],[]).
split(Z,X,Y):-append(X,Y,Z),length(X,LenX),length(Y,LenY),Diff is LenX - LenY, Diff < 2, Diff > -1.

merger([], Y, Y).
merger(Y, [], Y).
merger([A|X],[B|Y],Z):-A < B, append([A],MID,Z), merger(X, [B|Y], MID).
merger([A|X],[B|Y],Z):-A >= B, append([B], MID, Z), merger([A|X],Y,MID).

mergesort([],[]).
mergesort([A],[A]).
mergesort(A,Z):-length(A,Length),Length > 1,split(A,B,C),mergesort(B,First),mergesort(C,Second),merger(First,Second,Z).
