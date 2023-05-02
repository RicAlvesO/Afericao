# Respostas queries

## 1. Quantos exames estão registados?
```
db.exames.countDocuments()
```
## 2. Quantos exames tiveram um resultado válido?
```
db.exames.countDocuments({resultado: true})
```

## 3. Qual a distribuição dos exames por género?
```
db.exames.aggregate([{$group: {_id: "$género",count: {$sum: 1 }}}])
```

## 4. Qual a distribuição dos exames por modalidade?
```
db.exames.aggregate([{$group: {_id: "$modalidade",count: { $sum: 1 }}}])
```

## 5. Quantos atletas federados do "GDGoma" fizeram EMD?
```
db.exames.countDocuments({clube: "GDGoma", federado: true})
```

## 6. Quantos atletas do género feminino que praticam Triatlo fizeram EMD?
```
db.exames.countDocuments({modalidade: "Triatlo", género: "F"})
```